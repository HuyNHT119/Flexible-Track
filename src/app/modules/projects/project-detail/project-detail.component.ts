import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-project-detail',
    templateUrl: 'project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
    editForm: UntypedFormGroup;
    constructor(
        private _formBuilder: UntypedFormBuilder,
        public dialogRef: MatDialogRef<ProjectDetailComponent>,
    ) { }

    ngOnInit() {
        this.editForm = this._formBuilder.group({
            title: [''],
            description: ['']
        });
    }
}