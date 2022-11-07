import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-issue',
    templateUrl: 'add-issue.component.html'
})

export class AddIssueComponent implements OnInit {
    createForm: UntypedFormGroup;
    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder
    ) {
    }

    ngOnInit() {
        this.createForm = this._formBuilder.group({
            title: [''],
            description: [''],
        })
    }
}