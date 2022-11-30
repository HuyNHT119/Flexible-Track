import { Route } from '@angular/router';
import { ScrumboardBoardComponent } from 'app/modules/admin/apps/scrumboard/board/board.component';
import { ScrumboardBoardsComponent } from 'app/modules/admin/apps/scrumboard/boards/boards.component';
import { ScrumboardCardComponent } from 'app/modules/admin/apps/scrumboard/card/card.component';
import { ScrumboardBoardsResolver, ScrumboardCardResolver } from 'app/modules/admin/apps/scrumboard/scrumboard.resolvers';
import { FlextrackProjectResolver } from './scrumboard.resolvers';

export const scrumboardRoutes: Route[] = [
    {
        path: '',
        component: ScrumboardBoardsComponent,
        resolve: {
            boards: ScrumboardBoardsResolver
        }
    },
    {
        path: ':id',
        component: ScrumboardBoardComponent,
        resolve: {
            // board: ScrumboardBoardResolver,
            FlextrackProjectResolver
        },
        children: [
            {
                path: 'card/:cardId',
                component: ScrumboardCardComponent,
                resolve: {
                    card: ScrumboardCardResolver
                }
            }
        ]
    }
];
