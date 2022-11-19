import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from './../project.service';

@Component({
    selector: 'app-add-member',
    templateUrl: 'add-member.component.html'
})

export class AddMemberComponent implements OnInit {
    searchForm: UntypedFormGroup;
    members: any = [];
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddMemberComponent>,
        private form: UntypedFormBuilder,
        private _projectService: ProjectService
    ) { }

    ngOnInit() {
        console.log(this.data);

        this.initSearchForm();
    }

    initSearchForm() {
        this.searchForm = this.form.group({
            search: ['']
        });
    }

    searchMembers() {
        if (this.searchForm.get('search').value !== '') {
            this._projectService.searchMembers(this.data.projectId, this.searchForm.get('search').value).subscribe(result => {
                this.members = result.body.content
            })
        } else {
            this.members = [];
        }

    }

    addMember(memberId: number) {
        this._projectService.inviteMember(this.data.projectId, memberId).subscribe(result => {
            console.log(result);
        })
    }

}