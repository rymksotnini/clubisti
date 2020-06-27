import { Routes} from '@angular/router';
import {TestLandingComponent} from './pages/test-landing/test-landing.component';
import {DonationComponent} from './pages/donation/donation.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CharityProjectsComponent} from './pages/charity/charity-projects/charity-projects.component';
import {UserProfileComponent} from './pages/profile/user-profile/user-profile.component';
import {UpdateProfileComponent} from './pages/profile/update-profile/update-profile.component';
import {BuyCoinsComponent} from './pages/buy-coins/buy-coins.component';
import {ProjectDetailsComponent} from "./pages/charity/project-details/project-details.component";
import {HistoryComponent} from "./pages/history/history.component";
import {ListComplaintComponent} from "./pages/complain/list-complaint/list-complaint.component";


export const AnonymousLayoutRoutes: Routes = [
  { path: '',                   component: TestLandingComponent },
  { path: 'user-profile',   component: UserProfileComponent },
  { path: 'update-profile',   component: UpdateProfileComponent },
  { path: 'history/project/:id',            component: DonationComponent },
  { path: 'history',            component: HistoryComponent },
  { path: 'dashboard',          component: DashboardComponent },
  { path: 'projects',           component: CharityProjectsComponent },
  { path: 'complaints',           component: ListComplaintComponent },
  { path: 'buy-coins',           component: BuyCoinsComponent },
  { path: 'details/:id',         component: ProjectDetailsComponent}
];
