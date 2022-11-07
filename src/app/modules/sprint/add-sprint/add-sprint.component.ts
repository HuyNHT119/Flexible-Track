import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-sprint',
    templateUrl: 'add-sprint.component.html'
})

export class AddSprintComponent implements OnInit {
    createForm: UntypedFormGroup;
    constructor(
        private _formBuilder: UntypedFormBuilder
    ) { }

    ngOnInit() {
        this.createForm = this._formBuilder.group({
            title: [''],
            description: ['']
        });
    }
}