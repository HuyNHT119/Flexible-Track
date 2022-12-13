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
        public dialogRef: MatDialogRef<BacklogComponent>,
    ) { }

    ngOnInit() {
        this.getBacklogIssue();
    }

    getBacklogIssue() {
        this._scrumboardService.getBacklogIssues(this.data.backlogId).subscribe(result => {
            console.log(result);
            this.issues = result.body
        })
    }

    addToSprint(issue: any) {
        issue.sprintId = this.data.sprint.sprintId;
        issue.backlogId = null;
        var a = [];
        a.push(issue)
        this._scrumboardService.sendToSprint(a).subscribe(result => {
            this.getBacklogIssue();
        })
    }
}