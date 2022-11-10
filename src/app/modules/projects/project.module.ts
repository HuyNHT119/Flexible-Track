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
        ProjectDetailComponent
    ],
    imports: [
        RouterModule.forChild(projectRoutes),
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ProjectModule {
}
