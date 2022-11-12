import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Project } from './project.model';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectService } from './project.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-project',
    templateUrl: 'project.component.html'
})

export class ProjectComponent implements OnInit {
    constructor(
        private _dialog: MatDialog,
        public addProjectDialogRef: MatDialogRef<AddProjectComponent>,
        public projectDetailDialogRef: MatDialogRef<ProjectDetailComponent>,
        private _projectService: ProjectService,
        private _form: UntypedFormBuilder
    ) { }

    projects: Project[];
    createProjectForm: UntypedFormGroup;
    searchForm: UntypedFormGroup;

    ngOnInit() {
        this.loadProjects();
        this.searchForm = this._form.group({
            search: ['']
        });
    }

    openProjectDetailDialog(id: number) {
        this._dialog.open(ProjectDetailComponent, {
            width: '1080px',
            data: {
                projectId: id
            },
        });

    }

    openAddProjectDialog() {
        this._dialog.open(AddProjectComponent, {
            width: '720px'
        })
    }

    searchProject() {
        console.log('search');
        this._projectService.searchProjects(this.searchForm.get('search').value).subscribe(result => {
            this.projects = result.body.content;
        });
    }

    //PRIVATE METHOD
    private loadProjects(): void {
        this._projectService.getProjects().subscribe(result => {
            this.projects = result.body.content;
        });
    }

}