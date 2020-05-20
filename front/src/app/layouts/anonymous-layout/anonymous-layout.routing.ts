import { Routes} from '@angular/router';


import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {TestLandingComponent} from '../../pages/test-landing/test-landing.component';
import {CharityProjectsComponent} from '../../pages/charity-projects/charity-projects.component';
import {DonationComponent} from '../../pages/anonymous/donation/donation.component';

export const AnonymousLayoutRoutes: Routes = [
  { path: '',                   component: TestLandingComponent },
  { path: 'history',            component: DonationComponent },
  { path: 'dashboard',          component: DashboardComponent },
  { path: 'projects',           component: CharityProjectsComponent },
];
