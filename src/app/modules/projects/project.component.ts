import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Project } from './project.model';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MatDialog } from '@angular/material/dialog';
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
        private _changeDetectorRef: ChangeDetectorRef,
        private _projectService: ProjectService,
        private _form: UntypedFormBuilder
    ) { }

    projects$: Observable<Project[]>;
    createProjectForm: UntypedFormGroup;

    ngOnInit() {
        this.openProjectDetailDialog();
        this.loadProjects();
        this.projects$.subscribe(value => {
            console.log(value);
        })
    }

    openProjectDetailDialog() {
        this._dialog.open(ProjectDetailComponent, {
            width: '1080px'
        })
    }

    openAddProjectDialog() {
        this._dialog.open(AddProjectComponent, {
            width: '720px'
        })
    }

    //PRIVATE METHOD
    private loadProjects(): void {
        this.projects$ = this._projectService.projects$;
    }

}