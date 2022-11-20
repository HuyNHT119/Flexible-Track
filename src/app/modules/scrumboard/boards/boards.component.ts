import { Component, OnInit } from '@angular/core';
import { Board } from 'app/modules/scrumboard/scrumboard.models';
import { ProjectService } from './../../projects/project.service';

@Component({
    selector: 'scrumboard-boards',
    templateUrl: './boards.component.html',
})
export class ScrumboardBoardsComponent implements OnInit {
    boards: Board[];
    projects: any = [];

    /**
     * Constructor
     */
    constructor(
        private _projectService: ProjectService,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.getProjects();
    }

    getProjects() {
        this._projectService.getProjects().subscribe(result => {
            this.projects = result.body.content;
            console.log(this.projects);
        })
    }

}
