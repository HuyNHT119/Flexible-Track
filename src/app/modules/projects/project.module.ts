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

const projectRoutes: Route[] = [
    {
        path: '',
        component: ProjectComponent
    }
];

@NgModule({
    declarations: [
        ProjectComponent,
        AddProjectComponent,
        ProjectDetailComponent,
        AddMemberComponent
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
