import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {LandingComponent} from '../../pages/landing/landing.component';
import {ProductsComponent} from '../../pages/products/products.component';
import {CharityProjectsComponent} from '../../pages/charity-projects/charity-projects.component';

@NgModule({
  imports: [
    NzModalModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ],
  declarations: [
    LandingComponent,
    ProductsComponent,
    CharityProjectsComponent
  ]
})

export class AdminLayoutModule {}
