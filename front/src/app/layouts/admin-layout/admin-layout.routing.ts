import { Routes } from '@angular/router';
import {HistoryComponent} from '../../pages/history/history.component';
import {LandingComponent} from '../../pages/landing/landing.component';
import {CharityProjectsComponent} from '../../pages/charity-projects/charity-projects.component';
import {ProductsComponent} from '../../pages/products/products.component';


export const AdminLayoutRoutes: Routes = [
  { path: 'landing',          component: LandingComponent },
  { path: 'charity',          component: CharityProjectsComponent },
  { path: 'products',          component: ProductsComponent },
];
