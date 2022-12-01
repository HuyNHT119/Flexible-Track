import { ProjectService } from './../../projects/project.service';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-add-issue',
    templateUrl: 'add-issue.component.html'
})

export class AddIssueComponent implements OnInit {
    defaultSelected: any = 'Select one';
    createForm: UntypedFormGroup;
    formFieldHelpers: string[] = [''];
    priorities: any = [];
    members: any = [];
    types: any = [];
    tags: any = [];
    statuses: any = [];
    selectedTags: any = [];
    selectedSprintId: number;
    /**
     * Constructor
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddIssueComponent>,
        private _formBuilder: UntypedFormBuilder,
        private _projectService: ProjectService
    ) {
    }

    ngOnInit() {
        this.getPriorities();
        this.getProjectMembers();
        this.getTypeByProjectId();
        this.getTagsByProjecId();
        this.createForm = this._formBuilder.group({
            name: [''],
            createdDate: [''],
            updatedDate: [''],
            estimation: [0, Validators.required],
            finishedDate: [''],
            creatorId: [2],
            typeId: [null],
            priorityId: ['', Validators.required],
            statusId: [null],
            asignerId: ['', Validators.required],
            tagIds: [[], Validators.required],
            backlogId: [null],
            sprintId: [null],
            description: [''],
        });
        this.selectedSprintId = this.data.sprintId! ?? null;
        this.getStatuses();
    }

    createIssue() {
        this.createForm.controls['sprintId'].setValue(this.data.sprintId);
        if (this.createForm.valid) {
            if (this.selectedSprintId) {
                this._projectService.createIssue(this.createForm.value).subscribe(result => {
                    console.log(result);
                })
            } else {
                this.createForm.controls['backlogId'].setValue(this.data.project.backlogId);
                this._projectService.createIssue(this.createForm.value).subscribe(result => {
                    console.log(result);
                })
            }
        }
    }

    getPriorities() {
        this._projectService.getPriorityByProjectId(this.data.project.projectId).subscribe(result => {
            this.priorities = result.body;
            console.log(result.body);
        })
    }

    changeValue(event: any) {
        this.createForm.controls['priorityId'].setValue(event.id);
    }

    changeMemberValue(event: any) {
        this.createForm.controls['asignerId'].setValue(event.id ?? 3);
    }

    changeTypeValue(event: any) {
        this.createForm.controls['typeId'].setValue(event.id);
    }

    changeTagValue(event: any) {
        this.selectedTags = event;
        this.createForm.controls['tagIds'].setValue(this.selectedTags);
    }

    getStatuses() {
        console.log('result');
        console.log(this.selectedSprintId);

        if (this.selectedSprintId) {
            this._projectService.getSprintStatus(this.data.sprintId).subscribe(result => {
                console.log(result);
                this.statuses = result.body
            })
        }
    }

    changeStatusValue(event: any) {
        this.createForm.controls['statusId'].setValue(event.id);
    }

    getProjectMembers() {
        this._projectService.getProjectMembers(this.data.project.projectId).subscribe(result => {
            this.members = result.body
        })
    }

    getTypeByProjectId() {
        this._projectService.getTypeByProjectId(this.data.project.projectId).subscribe(result => {
            this.types = result.body;
            console.log(result);
        })
    }

    getTagsByProjecId() {
        this._projectService.getTagsByProjectId(this.data.project.projectId).subscribe(result => {
            this.tags = result.body;
        })
    }
} 