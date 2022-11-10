import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-issue-detail',
    templateUrl: 'issue-detail.component.html'
})

export class IssueDetailComponent implements OnInit {
    editForm: UntypedFormGroup;
    constructor(
        private _formBuilder: UntypedFormBuilder,
        public dialogRef: MatDialogRef<IssueDetailComponent>,
    ) { }

    ngOnInit() {
        this.editForm = this._formBuilder.group({
            title: [''],
            description: ['']
        });
    }
}