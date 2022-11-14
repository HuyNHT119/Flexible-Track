import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-add-project',
    templateUrl: 'add-project.component.html'
})

export class AddProjectComponent implements OnInit {
    createProjectForm: UntypedFormGroup;
    /**
     * Constructor
     */
    constructor(
        private _form: UntypedFormBuilder,
        private _projectService: ProjectService,
        public dialogRef: MatDialogRef<AddProjectComponent>,
    ) {
    }

    ngOnInit() {
        this.initCreateProjectForm();
    }

    initCreateProjectForm() {
        this.createProjectForm = this._form.group({
            projectName: ['', Validators.required],
            projectDescription: ['', Validators.required],
            userId: 2
        })
    }

    createProject() {
        if (this.createProjectForm.valid) {
            this._projectService.createProject(this.createProjectForm.value).subscribe(result => {
                console.log(result);
                if (result.status === 200) {
                    this._projectService.getProjects();
                }
            })
        }
    }
}