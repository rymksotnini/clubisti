import { Routes } from '@angular/router';
import {HistoryComponent} from '../../pages/history/history.component';
import {LandingComponent} from '../../pages/landing/landing.component';

import {ProductsComponent} from '../../pages/products/products.component';
import {CharitiesListComponent} from '../../pages/admin/charity/charities-list/charities-list.component';
import {CharityCreateComponent} from '../../pages/admin/charity/charity-create/charity-create.component';
import {ListCategoryComponent} from '../../pages/admin/category/list-category/list-category.component';



export const AdminLayoutRoutes: Routes = [
  { path: 'landing',          component: LandingComponent },
  { path: 'variable',          component: ListCategoryComponent },
  { path: 'charity',          component: CharitiesListComponent },
  { path: 'products',          component: ProductsComponent },
  {path: 'add-charity', component: CharityCreateComponent},

];
