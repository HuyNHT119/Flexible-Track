import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AddProjectComponent } from './add-project/add-project.component';

@Component({
    selector: 'app-project',
    templateUrl: 'project.component.html'
})

export class ProjectComponent implements OnInit {
    constructor(
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    openProjectDetailDialog() {
        this._dialog.open(ProjectDetailComponent, {
            width: '720px'
        })
    }

    openAddProjectDialog() {
        this._dialog.open(AddProjectComponent, {
            width: '720px'
        })
    }
}