import { SettingComponent } from './../settings/setting.component';
import { AddMemberComponent } from './../add-member/add-member.component';
import { filter } from 'rxjs';
import { CreateSprintComponent } from './../sprint/create-sprint.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddIssueComponent } from 'app/modules/issues/add-issue/add-issue.component';
import { IssueDetailComponent } from 'app/modules/issues/detail/issue-detail.component';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {

    id: any = {};
    project: any = {};
    sprints: any = [];
    selectedSprintId: number;
    members: any = [];
    issues: any = [];
    editForm: UntypedFormGroup;

    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _projectService: ProjectService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _dialog: MatDialog,
        public createSprintDialogRef: MatDialogRef<CreateSprintComponent>,
    ) { }

    ngOnInit() {
        this.id = this._route.snapshot.paramMap.get('id');
        this.initProjectForm();
        this.getProjectById();
        this.getProjectSprint();
        this.getProjectMembers();
    }

    openCreateSprintDialog() {
        this._dialog.open(CreateSprintComponent, {
            width: '1080px',
            data: {
                projectId: this.id
            },
        }).afterClosed().subscribe(() => {
            this.getProjectSprint();
        });
    }

    openSettingDialog() {
        this._dialog.open(SettingComponent, {
            width: '720px',
            data: {
                projectId: this.id
            },
        }).afterClosed().subscribe(() => {
        });
    }

    openIssueDetailDialog(id: any) {
        if (this.selectedSprintId) {
            this._dialog.open(IssueDetailComponent, {
                width: '720px',
                data: {
                    issueId: id,
                    sprintId: this.selectedSprintId,
                    projectId: this.id
                }
            }).afterClosed().subscribe(() => {
                if (this.selectedSprintId) {
                    this.getIssueBySprintId(this.selectedSprintId);
                }
            });
        }
    }

    openAddIssueDialog() {
        this._dialog.open(AddIssueComponent, {
            width: '480px',
            data: {
                project: this.project,
                sprintId: this.selectedSprintId
            }
        }).afterClosed().subscribe(() => {
            this.getProjectIssueBySprintId();
        });
    }

    openAddMemberDialog() {
        this._dialog.open(AddMemberComponent, {
            width: '720px',
            data: this.project
        }).afterClosed().subscribe(() => {
            this.getProjectMembers();
        });
    }

    getProjectById() {
        this._projectService.getProject(this.id).subscribe(result => {
            this.project = result.body;
            this.editForm.setValue({
                title: result.body.projectName,
                description: result.body.projectDescription,
            });
        })
    }

    initProjectForm() {
        this.editForm = this._formBuilder.group({
            title: [''],
            description: ['']
        })
    }

    getProjectSprint() {
        this._projectService.getSprints(this.id).subscribe(response => {
            this.sprints = response.body;
        })
    }

    getProjectIssueBySprintId() {
        this._projectService.getIssueBySprintId(this.selectedSprintId).subscribe(result => {
            this.issues = result.body.content
        })
    }

    getProjectMembers() {
        this._projectService.getProjectMembers(this.id).subscribe(result => {
            this.members = result.body;
        });
    }

    updateProject() {
        var body = {
            projectId: this.id,
            projectName: this.editForm.get('title').value,
            projectDescription: this.editForm.get('description').value,
        }
        this._projectService.updateProject(body).subscribe(result => {
            if (result.status === 200) {
                this.project = result.body.project;
            }
        })
    }

    getIssueBySprintId(id: number) {
        this.selectedSprintId = id;
        console.log(this.selectedSprintId);
        this._projectService.getIssueBySprintId(id).subscribe(result => {
            console.log(result);
            this.issues = result.body.content
        })
    }

}