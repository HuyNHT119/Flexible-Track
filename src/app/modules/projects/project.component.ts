import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { Project } from './project.model';
import { ProjectService } from './project.service';

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
        }).afterClosed().subscribe(() => {
        });

    }

    openAddProjectDialog() {
        this._dialog.open(AddProjectComponent, {
            width: '720px'
        }).afterClosed().subscribe(() => {
            this.loadProjects();
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