import { Routes } from '@angular/router';
import {LandingComponent} from '../../pages/landing/landing.component';

import {ProductsComponent} from '../../pages/products/products.component';
import {CharitiesListComponent} from '../../pages/admin/charity/charities-list/charities-list.component';
import {CharityCreateComponent} from '../../pages/admin/charity/charity-create/charity-create.component';
import {ListCategoryComponent} from '../../pages/admin/category/list-category/list-category.component';
import {UsersComponent} from '../../pages/users/users.component';
import {CharityUpdateComponent} from '../../pages/admin/charity/charity-update/charity-update.component';
import {AuthGuard} from '../../_guards/auth.guard';
import {Role} from '../../_models/enum/Role';

export const AdminLayoutRoutes: Routes = [
  { path: 'landing',
    component: LandingComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  { path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  { path: 'variable',
    component: ListCategoryComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  { path: 'charity',
    component: CharitiesListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  { path: 'charity/update/:id',
    component: CharityUpdateComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
    },
  { path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
    },
  {path: 'add-charity',
    component: CharityCreateComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  }
];
