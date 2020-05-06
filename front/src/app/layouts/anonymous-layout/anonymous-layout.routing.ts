import { Routes} from '@angular/router';

import {HistoryComponent} from '../../pages/history/history.component';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {TestLandingComponent} from '../../pages/test-landing/test-landing.component';

export const AnonymousLayoutRoutes: Routes = [
  { path: '',                   component: TestLandingComponent },
  { path: 'history',            component: HistoryComponent },
  { path: 'dashboard',          component: DashboardComponent },
];
