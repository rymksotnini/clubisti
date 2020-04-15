import {Routes} from '@angular/router';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';

export const TemplateLayoutRoutes: Routes = [
  { path: 'user-profile',   component: UserProfileComponent },
  { path: 'tables',         component: TablesComponent },
  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent }
];
