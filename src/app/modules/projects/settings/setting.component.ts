import { delay } from 'rxjs';
import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../project.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';

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
    configForm: UntypedFormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<SettingComponent>,
        private form: UntypedFormBuilder,
        private _projectService: ProjectService,
        private _fuseConfirmationService: FuseConfirmationService
    ) { }

    ngOnInit() {
        this.initCerateTagForm();
        this.initCreatePriorityForm();
        this.initCreateTypeForm();
        this.builderConfirmForm();
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

    builderConfirmForm() {
        // Build the config form
        this.configForm = this.form.group({
            title: 'Remove',
            message: 'Are you sure you want to remove permanently? <span class="font-medium">This action cannot be undone!</span>',
            icon: this.form.group({
                show: true,
                name: 'heroicons_outline:exclamation',
                color: 'warn'
            }),
            actions: this.form.group({
                confirm: this.form.group({
                    show: true,
                    label: 'Remove',
                    color: 'warn'
                }),
                cancel: this.form.group({
                    show: true,
                    label: 'Cancel'
                })
            }),
            dismissible: true
        });
    }

    removePriority(id: any) {
        // Open the dialog and save the reference of it
        const dialogRef = this._fuseConfirmationService.open(this.configForm.value);

        // Subscribe to afterClosed from the dialog reference
        dialogRef.afterClosed().subscribe((result) => {
            if (result == 'confirmed') {
                this._projectService.removePriority(id).subscribe(result => {
                    this.getPriorities();
                })
            }
        });
    }

    removeTag(id: any) {
        // Open the dialog and save the reference of it
        const dialogRef = this._fuseConfirmationService.open(this.configForm.value);

        // Subscribe to afterClosed from the dialog reference
        dialogRef.afterClosed().subscribe((result) => {
            if (result == 'confirmed') {
                this._projectService.removeTag(id).subscribe(result => {
                    this.getTags();
                })
            }
        });
    }

    removeType(id: any) {
        // Open the dialog and save the reference of it
        const dialogRef = this._fuseConfirmationService.open(this.configForm.value);

        // Subscribe to afterClosed from the dialog reference
        dialogRef.afterClosed().subscribe((result) => {
            if (result == 'confirmed') {
                this._projectService.removeType(id).subscribe(result => {
                    this.getTypes();
                })
            }
        });
    }
}