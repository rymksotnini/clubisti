import { Routes } from '@angular/router';
import {LandingComponent} from '../../pages/landing/landing.component';

import {ProductsComponent} from '../../pages/products/products.component';
import {CharitiesListComponent} from '../../pages/admin/charity/charities-list/charities-list.component';
import {CharityCreateComponent} from '../../pages/admin/charity/charity-create/charity-create.component';
import {ListCategoryComponent} from '../../pages/admin/category/list-category/list-category.component';
import {UsersComponent} from '../../pages/users/users.component';
import {CharityUpdateComponent} from '../../pages/admin/charity/charity-update/charity-update.component';
import {BadgesListComponent} from '../../pages/admin/badge/badges-list/badges-list.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'landing',          component: LandingComponent },
  {
    path: 'users',
    component: UsersComponent,
  },
  { path: 'category',          component: ListCategoryComponent },
  { path: 'badge',          component: BadgesListComponent },
  { path: 'charity',          component: CharitiesListComponent },
  { path: 'charity/update/:id',          component: CharityUpdateComponent },
  { path: 'products',          component: ProductsComponent },
  {path: 'add-charity', component: CharityCreateComponent},
];
