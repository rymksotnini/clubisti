import { Routes} from '@angular/router';

import {HistoryComponent} from '../../pages/history/history.component';
import {FbAuthComponent} from "../../components/fb-auth/fb-auth.component";
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';

export const AnonymousLayoutRoutes: Routes = [
  { path: 'history',          component: HistoryComponent },
  { path: 'dashboard',          component: DashboardComponent }
];
