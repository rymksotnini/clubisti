import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {LandingComponent} from '../../pages/landing/landing.component';
import {ProductsComponent} from '../../pages/products/products.component';
import {UsersComponent} from '../../pages/users/users.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ListCategoryComponent} from "../../pages/admin/category/list-category/list-category.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbDropdownModule,
    MatSnackBarModule,
    NgZorroAntdModule,
  ],
  declarations: [
    LandingComponent,
    ProductsComponent,
    UsersComponent,

  ]
})

export class AdminLayoutModule {}
