import { AddIssueComponent } from './add-issue/add-issue.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { IssueDetailComponent } from './detail/issue-detail.component';

@Component({
    selector: 'app-issue',
    templateUrl: 'issue.component.html'
})

export class IssueComponent implements OnInit {
    constructor(
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    openAddIssueDialog() {
        this._dialog.open(AddIssueComponent);
    }

    openIssueDetailDialog() {
        this._dialog.open(IssueDetailComponent);
    }
}