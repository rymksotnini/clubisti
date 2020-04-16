import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {LandingComponent} from '../../pages/landing/landing.component';
import {ProductsComponent} from '../../pages/products/products.component';
import {CharityProjectsComponent} from '../../pages/charity-projects/charity-projects.component';
import {UsersComponent} from '../../pages/users/users.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbDropdownModule,
    MatSnackBarModule,
    NgZorroAntdModule
  ],
  declarations: [
    LandingComponent,
    ProductsComponent,
    CharityProjectsComponent,
    UsersComponent,
  ]
})

export class AdminLayoutModule {}
