import { ProjectService } from './../../projects/project.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
        private _formBuilder: UntypedFormBuilder,
        public dialogRef: MatDialogRef<AddIssueComponent>,
        private _projectService: ProjectService

    ) {
    }

    ngOnInit() {
        this.createForm = this._formBuilder.group({
            name: [''],
            createdDate: [''],
            updatedDate: [''],
            estimation: [],
            finishedDate: [''],
            creatorId: [2],
            typeId: [1],
            priorityId: [2],
            statusId: [3],
            asignerId: [5],
            tagId: [1],
            sprintId: [3],
            description: [''],
        })
    }

    createIssue() {
        this._projectService.createIssue(this.createForm.value).subscribe(result => {
            console.log(result);
        })
    }
}