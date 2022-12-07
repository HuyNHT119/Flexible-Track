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
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleComponent } from './article.component';

const articleRoutes: Route[] = [
    {
        path: '',
        component: ArticleComponent,
    },
    {
        path: ':id',
        component: ArticleDetailComponent
    }
];

@NgModule({
    declarations: [
        ArticleComponent,
        ArticleDetailComponent
    ],
    imports: [
        RouterModule.forChild(articleRoutes),
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
export class ArticleModule {
}
