import {Routes} from '@angular/router';
import {RegisterComponent} from '../../pages/register/register.component';
import {HistoryComponent} from '../../pages/history/history.component';

export const AnonymousLayoutRoutes: Routes = [
  { path: 'history',          component: HistoryComponent },
];
