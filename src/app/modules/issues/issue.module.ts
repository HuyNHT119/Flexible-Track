import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { IssueComponent } from './issue.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { IssueDetailComponent } from './detail/issue-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

const issueRoutes: Route[] = [
    {
        path: '',
        component: IssueComponent
    }
];

@NgModule({
    declarations: [
        IssueComponent,
        AddIssueComponent,
        IssueDetailComponent
    ],
    imports: [
        RouterModule.forChild(issueRoutes),
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class IssueModule {
}
