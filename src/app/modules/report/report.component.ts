import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../projects/project.service';

@Component({
    selector: 'app-report',
    templateUrl: 'report.component.html'
})

export class ReportComponent implements OnInit {
    projects: any[] = [];
    constructor(
        private _projectService: ProjectService
    ) { }

    ngOnInit() {
        this.getProjectByUserId();
    }

    getProjectByUserId() {
        this._projectService.getProjects(2).subscribe(result => {
            this.projects = result.body.content;
        })
    }

    projectChanged(event: any) {
        this._projectService.getIssueByProjectId(event.value.projectId).subscribe(result => {
        })
    }
}