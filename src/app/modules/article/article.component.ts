import { ProjectService } from 'app/modules/projects/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: 'article.component.html'
})

export class ArticleComponent implements OnInit {

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