import { ProjectService } from './../project.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-create-status',
    templateUrl: 'create-status.component.html'
})

export class CreateStatusComponent implements OnInit {

    createStatusForm: UntypedFormGroup;

    constructor(
        private _form: UntypedFormBuilder,
        private _projectService: ProjectService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CreateStatusComponent>,
    ) { }

    ngOnInit() {
        this.initCreateStatusForm();
        console.warn(this.data);

    }

    initCreateStatusForm() {
        this.createStatusForm = this._form.group({
            name: ['', Validators.required],
            sprintId: [this.data.sprintId, Validators.required]
        });
    }

    addStatus() {
        if (this.createStatusForm.valid) {
            this._projectService.createStatus(this.createStatusForm.value).subscribe(result => {
                this.dialogRef.close();
            });
        }
    }
}