import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SprintComponent } from './sprint.compoent';
import { AddSprintComponent } from './add-sprint/add-sprint.component';

const sprintRoutes: Route[] = [
    {
        path: '',
        component: SprintComponent
    }
];

@NgModule({
    declarations: [
        AddSprintComponent,
    ],
    imports: [
        RouterModule.forChild(sprintRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SprintModule {
}
