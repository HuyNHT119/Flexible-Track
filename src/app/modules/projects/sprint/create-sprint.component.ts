import { ProjectService } from './../project.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-create-sprint',
    templateUrl: 'create-sprint.component.html'
})

export class CreateSprintComponent implements OnInit {

    createSprintForm: UntypedFormGroup;
    createStatusForm: UntypedFormGroup;
    statuses: any[] = [];
    formFieldHelpers: string[] = [''];

    constructor(
        private _form: UntypedFormBuilder,
        private _projectService: ProjectService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CreateSprintComponent>,
        private dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.initCreateSprintForm();
        this.initCreateStatusForm();
    }

    initCreateSprintForm() {
        this.createSprintForm = this._form.group({
            sprintName: ['', Validators.required],
            startedDate: ['', Validators.required],
            finishedDate: ['', Validators.required],
            creatorId: ['', Validators.required],
            projectId: ['', Validators.required],
        });
    }

    initCreateStatusForm() {
        this.createStatusForm = this._form.group({
            name: ['', Validators.required]
        });
    }

    createSprint() {
        this.createSprintForm.controls['creatorId'].setValue(2);
        this.createSprintForm.controls['projectId'].setValue(this.data.projectId);
        this._projectService.createSprint(this.createSprintForm.value).subscribe(result => {
            console.log(result);
        })
    }

    addStatus() {
        if (this.createStatusForm.valid) {
            this.statuses.push(this.createStatusForm.value);
        }
    }

    removeStatus(index: any) {
        this.statuses.splice(index, 1)
    }

    getFormFieldHelpersAsString(): string {
        return this.formFieldHelpers.join(' ');
    }
}