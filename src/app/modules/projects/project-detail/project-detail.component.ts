import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddIssueComponent } from './../../issues/add-issue/add-issue.component';
import { AddMemberComponent } from './../add-member/add-member.component';
import { ProjectService } from './../project.service';

@Component({
    selector: 'app-project-detail',
    templateUrl: 'project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
    sprints: any = [];
    project: any = {};
    issues: any = [];
    members: any = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ProjectDetailComponent>,
        private dialog: MatDialog,
        public addIssueDialogRef: MatDialogRef<AddIssueComponent>,
        public addMemberDialogRef: MatDialogRef<AddMemberComponent>,
        private _projectService: ProjectService
    ) { }

    ngOnInit() {
        this.getProjectById();
        this.getProjectSprint();
        this.getProjectIssues();
        this.getProjectMembers();
    }

    openAddIssueDialog() {
        this.dialog.open(AddIssueComponent, {
            data: {
                project: this.data,
                sprints: this.sprints
            }
        }).afterClosed().subscribe(() => {
            this.getProjectIssues();
        });
    }

    openAddMemberDialog() {
        this.dialog.open(AddMemberComponent, {
            width: '480px',
            data: this.data
        }).afterClosed().subscribe(() => {
            this.getProjectMembers();
        });
    }

    getProjectById() {
        this._projectService.getProject(this.data.projectId).subscribe(result => {
            this.project = result.body;
        })
    }

    getProjectSprint() {
        this._projectService.getSprints(this.data.projectId).subscribe(response => {
            this.sprints = response.body;
            console.log(this.sprints);
        })
    }

    getProjectIssues() {
        this._projectService.getIssues(this.data.projectId).subscribe(response => {
            this.issues = response.body.content;
        })
    }

    getProjectMembers() {
        this._projectService.getProjectMembers(this.data.projectId).subscribe(result => {
            this.members = result.body;
        });
    }
}