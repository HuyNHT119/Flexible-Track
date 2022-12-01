import { CreateStatusComponent } from './../status/create-status.component';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddIssueComponent } from 'app/modules/issues/add-issue/add-issue.component';
import { IssueDetailComponent } from 'app/modules/issues/detail/issue-detail.component';
import { AddMemberComponent } from './../add-member/add-member.component';
import { ProjectService } from './../project.service';
import { SettingComponent } from './../settings/setting.component';
import { CreateSprintComponent } from './../sprint/create-sprint.component';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {

    id: any = {};
    project: any = {};
    sprints: any = [];
    selectedSprintId: number;
    selectedSprint: any = null;
    statuses: any[] = [];
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

    openAddStatusDialog() {
        this._dialog.open(CreateStatusComponent, {
            width: '480px',
            data: { sprintId: this.selectedSprint.sprintId }
        }).afterClosed().subscribe(() => {
            this.getSprint(this.selectedSprint.sprintId);
        });
    }

    getSprint(id: any) {
        this.getIssueBySprintId(id);
        this._projectService.getSprint(id).subscribe(result => {
            this.getSprintStatus(id);
            this.selectedSprint = result.body;
        });
    }

    getSprintStatus(id: any) {
        this._projectService.getSprintStatus(id).subscribe(result => {
            this.statuses = result.body;
        })
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
            console.log(response);
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

    backlogClick() {
        this.selectedSprintId = null;
        this.selectedSprint = null;
        this.issues = [];
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