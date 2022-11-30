import { ProjectService } from './../../../../projects/project.service';
import { ScrumboardService } from './../scrumboard.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-backlog',
    templateUrl: 'backlog.component.html'
})

export class BacklogComponent implements OnInit {

    private backlogId: any;
    issues: any[] = [];
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _scrumboardService: ScrumboardService,
        private _projectService: ProjectService,
        public dialogRef: MatDialogRef<BacklogComponent>,
    ) { }

    ngOnInit() {
        this.getBacklogIssue();
    }

    getBacklogIssue() {
        console.log('Get issue!!!');
        console.log(this.data.backlogId);
        this._scrumboardService.getBacklogIssues(this.data.backlogId).subscribe(result => {
            console.log(result);
            this.issues = result.body
        })
    }

    addToSprint(issue: any) {
        console.warn(issue);
        issue.sprintId = this.data.sprint.sprintId;
        issue.backlogId = null;
        console.log(issue);

        var a = [];
        a.push(issue)
        this._scrumboardService.updateIssue(a).subscribe(result => {
            console.log(result);
        })
    }
}