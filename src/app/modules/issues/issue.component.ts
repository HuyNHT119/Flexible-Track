import { ProjectService } from 'app/modules/projects/project.service';
import { Issue } from './../admin/apps/scrumboard/flex-track.model';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { IssueDetailComponent } from './detail/issue-detail.component';

@Component({
    selector: 'app-issue',
    templateUrl: 'issue.component.html'
})

export class IssueComponent implements OnInit {
    sprintSelected: string = 'english';
    projectSelected: string = 'english';

    projects: any[] = [];
    sprints: any[] = [];

    selectedProject: any = null;
    selectedSprint: any = null;
    issues: Issue[] = [];

    constructor(
        private _dialog: MatDialog,
        private _projectService: ProjectService
    ) { }

    ngOnInit() {
        this.getIssuesByUserId();
        this.getProjectByUserId();
    }

    getProjectByUserId() {
        this._projectService.getProjects(2).subscribe(result => {
            this.projects = result.body.content;
        })
    }

    getIssuesByUserId() {
        this._projectService.getIssuesyUserId().subscribe(result => {
            this.issues = result.body.content
        })
    }

    openAddIssueDialog() {
        this._dialog.open(AddIssueComponent);
    }

    projectChanged(event: any) {
        this.selectedProject = event.value;
        if (this.selectedProject.projectId) {
            this._projectService.getSprints(event.value.projectId).subscribe(result => {
                this.sprints = result.body;
            })
            this._projectService.getIssueByProjectId(event.value.projectId).subscribe(result => {
                this.issues = result.body.content;
            })
        }
    }

    sprintChanged(event: any) {
        this.selectedSprint = event.value;
        this._projectService.getIssueBySprintId(event.value.sprintId).subscribe(result => {
            this.issues = result.body.content;
        })
    }

    searchIssue(value: any) {
        if (this.selectedSprint) {
            this._projectService.getIssueBySprintId(this.selectedSprint.sprintId, value).subscribe(result => {
                this.issues = result.body.content;
            })
        }
    }

    openIssueDetailDialog(issue: any) {
        this._dialog.open(IssueDetailComponent, {
            width: '720px',
            data: {
                issueId: issue.issueId,
                sprintId: issue.sprintId,
                projectId: issue.projectId
            }
        }).afterClosed().subscribe(() => {
            // this.getIssuesByUserId();
        });
    }
}