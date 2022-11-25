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
        this.getStatuses();
        this.createForm = this._formBuilder.group({
            name: [''],
            createdDate: [''],
            updatedDate: [''],
            estimation: [0, Validators.required],
            finishedDate: [''],
            creatorId: [2],
            typeId: [1],
            priorityId: ['', Validators.required],
            statusId: ['', Validators.required],
            asignerId: ['', Validators.required],
            tagIds: [[], Validators.required],
            sprintId: ['', Validators.required],
            description: [''],
        })
    }

    createIssue() {
        this.createForm.controls['sprintId'].setValue(this.data.sprintId);
        if (this.createForm.valid) {
            this._projectService.createIssue(this.createForm.value).subscribe(result => {
                console.log(result);
            })
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
        this._projectService.getSprintStatus(this.data.sprintId).subscribe(result => {
            this.statuses = result.body
        })
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