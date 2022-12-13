import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from 'app/modules/projects/project.service';

@Component({
    selector: 'app-issue-detail',
    templateUrl: 'issue-detail.component.html'
})

export class IssueDetailComponent implements OnInit {
    editForm: UntypedFormGroup;
    issue: any = {};
    types: any[] = [];
    tagsId: any[] = [];
    statuses: any[] = [];
    priorities: any[] = [];
    assigners: any[] = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<IssueDetailComponent>,
        private _formBuilder: UntypedFormBuilder,
        private _projectService: ProjectService
    ) { }

    ngOnInit() {
        this.getIssueById();
        this.getPriorities();
        this.getTypes();
        this.getStatuses();
        this.getProjectMember();
        this.editForm = this._formBuilder.group({
            issueId: [''],
            issueName: [''],
            createdDate: [''],
            updatedDate: [''],
            estimation: [0, Validators.required],
            finishedDate: [''],
            creatorId: [2],
            typeId: [''],
            priorityId: ['', Validators.required],
            statusId: ['', Validators.required],
            asignerId: ['', Validators.required],
            tagIds: [[], Validators.required],
            sprintId: ['', Validators.required],
            description: [''],
        });
    }

    getIssueById() {
        this._projectService.getIssue(this.data.issueId).subscribe(result => {
            this.issue = result.body;
            this.editForm.patchValue(this.issue);
            this.editForm.controls['statusId'].setValue(this.issue.status.id);
            this.editForm.controls['typeId'].setValue(this.issue.type.id);
            this.editForm.controls['asignerId'].setValue(this.issue.assigner.id);
            this.editForm.controls['priorityId'].setValue(this.issue.priority.id);
            var a: any[] = this.issue.tag;
            a.forEach(tag => {
                this.tagsId.push(tag.id);
            })
            this.editForm.controls['tagIds'].setValue(this.tagsId);
        })
    }

    getPriorities() {
        this._projectService.getPriorityByProjectId(this.data.projectId).subscribe(result => {
            this.priorities = result.body;
        })
    }

    getTypes() {
        this._projectService.getTypeByProjectId(this.data.projectId).subscribe(result => {
            this.types = result.body;
        })
    }

    getStatuses() {
        this._projectService.getSprintStatus(this.data.sprintId).subscribe(result => {
            this.statuses = result.body;
        })
    }

    getProjectMember() {
        this._projectService.getProjectMembers(this.data.projectId).subscribe(result => {
            console.log(result);
            this.assigners = result.body;
        })
    }

    changeValue(event: any) {
        this.editForm.controls['priorityId'].setValue(event);

    }

    typeChangeValue(event: any) {
        this.editForm.controls['typeId'].setValue(event);
    }

    statusChangeValue(event: any) {
        this.editForm.controls['statusId'].setValue(event);
    }

    assignChangeValue(event: any) {
        this.editForm.controls['asignerId'].setValue(event);
    }

    updateIssue() {
        this._projectService.updateIssue(this.editForm.value).subscribe(result => {
        })
    }
}