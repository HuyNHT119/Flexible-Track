import { ProjectService } from './../project.service';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-project-detail',
    templateUrl: 'project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
    editForm: UntypedFormGroup;
    sprints: any = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _formBuilder: UntypedFormBuilder,
        public dialogRef: MatDialogRef<ProjectDetailComponent>,
        private _projectService: ProjectService
    ) { }

    ngOnInit() {
        this.editForm = this._formBuilder.group({
            title: [''],
            description: ['']
        });
        this.getProjectSprint();
    }

    getProjectSprint() {
        this._projectService.getSprints(this.data.projectId).subscribe(response => {
            this.sprints = response.body;
            console.log(response);
        })
    }
}