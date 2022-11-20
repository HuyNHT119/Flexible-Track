import { delay } from 'rxjs';
import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-setting',
    templateUrl: 'setting.component.html'
})

export class SettingComponent implements OnInit, AfterViewInit {

    types: any = [];
    tags: any = [];
    priorities: any = [];

    createTagForm: UntypedFormGroup;
    createTypeForm: UntypedFormGroup;
    createPriorityForm: UntypedFormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<SettingComponent>,
        private form: UntypedFormBuilder,
        private _projectService: ProjectService
    ) { }

    ngOnInit() {
        this.initCerateTagForm();
        this.initCreatePriorityForm();
        this.initCreateTypeForm();
    }

    ngAfterViewInit(): void {
        this.getPriorities();
        this.getTags();
        this.getTypes();
    }

    initCerateTagForm() {
        this.createTagForm = this.form.group({
            tagName: ['', Validators.required]
        });
    }

    initCreateTypeForm() {
        this.createTypeForm = this.form.group({
            typeName: ['', Validators.required]
        });
    }

    initCreatePriorityForm() {
        this.createPriorityForm = this.form.group({
            priorityName: ['', Validators.required]
        });
    }

    getTags() {
        this._projectService.getTagsByProjectId(this.data.projectId).subscribe(result => {
            this.tags = result.body
        })
    }

    getTypes() {
        this._projectService.getTypeByProjectId(this.data.projectId).subscribe(result => {
            this.types = result.body
        })
    }

    getPriorities() {
        this._projectService.getPriorityByProjectId(this.data.projectId).subscribe(result => {
            this.priorities = result.body
        })
    }

    createTag() {
        if (this.createTagForm.valid) {
            var data = {
                projectId: this.data.projectId,
                name: this.createTagForm.controls['tagName'].value
            }
            this._projectService.createTag(data).subscribe(result => {
                if (result.status == 200) {
                    this.getTags();
                }
            })
        }
    }

    createType() {
        if (this.createTypeForm.valid) {
            var data = {
                projectId: this.data.projectId,
                name: this.createTypeForm.controls['typeName'].value
            }
            this._projectService.createType(data).subscribe(result => {
                if (result.status == 200) {
                    this.getTypes();
                }
            })
        }
    }

    createPriority() {
        if (this.createPriorityForm.valid) {
            var data = {
                projectId: this.data.projectId,
                name: this.createPriorityForm.controls['priorityName'].value
            }
            this._projectService.createPriority(data).subscribe(result => {
                if (result.status == 200) {
                    this.getPriorities();
                }
            })
        }
    }
}