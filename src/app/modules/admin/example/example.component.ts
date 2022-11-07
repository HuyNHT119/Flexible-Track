import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit {
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
