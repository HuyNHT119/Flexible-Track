import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as moment from 'moment';
import { SharedModule } from 'app/shared/shared.module';
import { ScrumboardComponent } from 'app/modules/scrumboard/scrumboard.component';
import { ScrumboardBoardsComponent } from 'app/modules/scrumboard/boards/boards.component';
import { ScrumboardBoardComponent } from 'app/modules/scrumboard/board/board.component';
import { ScrumboardBoardAddCardComponent } from 'app/modules/scrumboard/board/add-card/add-card.component';
import { ScrumboardBoardAddListComponent } from 'app/modules/scrumboard/board/add-list/add-list.component';
import { ScrumboardCardComponent } from 'app/modules/scrumboard/card/card.component';
import { ScrumboardCardDetailsComponent } from 'app/modules/scrumboard/card/details/details.component';
import { ScrumboardBoardsAddBoardComponent } from 'app/modules/scrumboard/boards/add-board/add-board.component';
import { scrumboardRoutes } from 'app/modules/scrumboard/scrumboard.routing';

@NgModule({
    declarations: [
        ScrumboardComponent,
        ScrumboardBoardsComponent,
        ScrumboardBoardComponent,
        ScrumboardBoardAddCardComponent,
        ScrumboardBoardAddListComponent,
        ScrumboardCardComponent,
        ScrumboardCardDetailsComponent,
        ScrumboardBoardsAddBoardComponent
    ],
    imports: [
        RouterModule.forChild(scrumboardRoutes),
        DragDropModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatProgressBarModule,
        SharedModule
    ],
    providers: [
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: moment.ISO_8601
                },
                display: {
                    dateInput: 'll',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY'
                }
            }
        }
    ]
})
export class ScrumboardModule {
}
