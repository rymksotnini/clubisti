import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';


import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AnonymousLayoutComponent } from './layouts/anonymous-layout/anonymous-layout.component';
import { TemplateLayoutComponent } from './layouts/template-layout/template-layout.component';
import { HistoryComponent } from './pages/history/history.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProductsComponent } from './pages/products/products.component';
import { CharityProjectsComponent } from './pages/charity-projects/charity-projects.component';
import { CharitiesListComponent } from './pages/admin/charity/charities-list/charities-list.component';
import { CharityCreateComponent } from './pages/admin/charity/charity-create/charity-create.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CreateCategoryComponent } from './pages/admin/category/create-category/create-category.component';




@NgModule({
  imports: [
    NzModalModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AnonymousLayoutComponent,
    TemplateLayoutComponent,
    CharitiesListComponent,
    CharityCreateComponent,
    CreateCategoryComponent,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
