import { SettingComponent } from './settings/setting.component';
import { SettingsComponent } from './../../layout/common/settings/settings.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CreateSprintComponent } from './sprint/create-sprint.component';
import { DetailComponent } from './detail/detail.component';
import { MatDialogRef, MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectComponent } from './project.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectComponent } from './add-project/add-project.component';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './add-member/add-member.component';
import { MatNativeDateModule } from '@angular/material/core';

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
        SettingComponent
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
