import { Routes } from '@angular/router';
import {HistoryComponent} from '../../pages/history/history.component';
import {LandingComponent} from '../../pages/landing/landing.component';

import {ProductsComponent} from '../../pages/products/products.component';
import {CharitiesListComponent} from '../../pages/admin/charity/charities-list/charities-list.component';
import {CharityCreateComponent} from '../../pages/admin/charity/charity-create/charity-create.component';
import {ListCategoryComponent} from '../../pages/admin/category/list-category/list-category.component';
import {UsersComponent} from '../../pages/users/users.component';
import {CharityUpdateComponent} from '../../pages/admin/charity/charity-update/charity-update.component';
import {BadgesListComponent} from '../../pages/admin/badge/badges-list/badges-list.component';
import {VariableComponent} from '../../pages/admin/variable/variable.component';
import {AuthGuard} from "../../_guards/auth.guard";
import {Role} from "../../_models/enum/Role";

export const AdminLayoutRoutes: Routes = [
  { path: 'landing',          component: LandingComponent },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.Admin]}
  },
  { path: 'variable',          component: VariableComponent },
  { path: 'category',          component: ListCategoryComponent },
  { path: 'badge',          component: BadgesListComponent },
  { path: 'charity',          component: CharitiesListComponent },
  { path: 'charity/update/:id',          component: CharityUpdateComponent },
  { path: 'products',          component: ProductsComponent },
  {path: 'add-charity', component: CharityCreateComponent}
];
