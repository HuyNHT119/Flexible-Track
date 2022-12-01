import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { DetailComponent } from './detail/detail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectComponent } from './project.component';
import { SettingComponent } from './settings/setting.component';
import { CreateSprintComponent } from './sprint/create-sprint.component';
import { CreateStatusComponent } from './status/create-status.component';

const projectRoutes: Route[] = [
    {
        path: '',
        component: ProjectComponent,
    },
    {
        path: ':id',
        component: DetailComponent
    }
];

@NgModule({
    declarations: [
        ProjectComponent,
        AddProjectComponent,
        ProjectDetailComponent,
        AddMemberComponent,
        DetailComponent,
        CreateSprintComponent,
        SettingComponent,
        CreateStatusComponent
    ],
    imports: [
        RouterModule.forChild(projectRoutes),
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        MatDialog,
        {
            provide: MatDialogRef,
            useValue: {}
        },
    ],
})
export class ProjectModule {
}
