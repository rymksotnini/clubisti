import {Routes} from '@angular/router';
import {RegisterComponent} from '../../pages/register/register.component';
import {HistoryComponent} from '../../pages/history/history.component';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';

export const AnonymousLayoutRoutes: Routes = [
  { path: 'history',          component: HistoryComponent },
  { path: 'dashboard',          component: DashboardComponent }
];
