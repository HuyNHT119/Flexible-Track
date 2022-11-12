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
    project: any = {};
    sprints: any = [];
    members: any = [];

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
        this.getProjectById();
        this.getProjectSprint();
        this.getProjectMembers();
    }

    getProjectById() {
        this._projectService.getProject(this.data.projectId).subscribe(result => {
            this.project = result.body;
            this.editForm.setValue({
                title: result.body.projectName,
                description: result.body.projectDescription,
            });
        })
    }

    getProjectSprint() {
        this._projectService.getSprints(this.data.projectId).subscribe(response => {
            this.sprints = response.body;
        })
    }

    getProjectMembers() {
        this._projectService.getProjectMembers(this.data.projectId).subscribe(result => {
            this.members = result.body;
        });
    }

    updateProject() {
        var body = {
            projectId: this.data.projectId,
            projectName: this.editForm.get('title').value,
            projectDescription: this.editForm.get('description').value,
        }
        this._projectService.updateProject(body).subscribe(result => {
            if (result.status === 200) {
                this.project = result.body.project;
            }
        })
    }
}