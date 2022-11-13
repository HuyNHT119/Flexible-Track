import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from './../project.service';

@Component({
    selector: 'app-add-member',
    templateUrl: 'add-member.component.html'
})

export class AddMemberComponent implements OnInit {
    searchForm: UntypedFormGroup;
    members: any = [];
    constructor(
        public dialogRef: MatDialogRef<AddMemberComponent>,
        private form: UntypedFormBuilder,
        private _projectService: ProjectService
    ) { }

    ngOnInit() {
        this.initSearchForm();
    }

    initSearchForm() {
        this.searchForm = this.form.group({
            search: ['']
        });
    }

    searchMembers() {
        if (this.searchForm.get('search').value !== '') {
            this._projectService.searchMembers(this.searchForm.get('search').value).subscribe(result => {
                this.members = result.body.content
            })
        } else {
            this.members = [];
        }

    }

}