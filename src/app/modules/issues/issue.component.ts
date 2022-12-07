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

    issues: Issue[] = [];

    constructor(
        private _dialog: MatDialog,
        private _projectService: ProjectService
    ) { }

    ngOnInit() {
        this.getIssuesByUserId();
    }

    getIssuesByUserId() {
        this._projectService.getIssuesyUserId().subscribe(result => {
            this.issues = result.body.content
        })
    }

    openAddIssueDialog() {
        this._dialog.open(AddIssueComponent);
    }

    openIssueDetailDialog(issue: any) {
        console.log(issue);

        this._dialog.open(IssueDetailComponent, {
            width: '720px',
            data: {
                issueId: issue.issueId,
                sprintId: issue.sprintId,
                projectId: issue.projectId
            }
        }).afterClosed().subscribe(() => {
            this.getIssuesByUserId();
        });
    }
}