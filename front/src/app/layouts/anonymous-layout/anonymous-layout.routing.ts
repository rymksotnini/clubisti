import {Routes} from '@angular/router';
import {RegisterComponent} from '../../pages/register/register.component';
import {HistoryComponent} from '../../pages/history/history.component';
import {FbAuthComponent} from "../../components/fb-auth/fb-auth.component";

export const AnonymousLayoutRoutes: Routes = [
  { path: 'history',          component: HistoryComponent },
  { path: 'fblogin',          component: FbAuthComponent },
];
