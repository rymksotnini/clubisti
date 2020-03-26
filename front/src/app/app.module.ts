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
import { CreateCategoryComponent } from './pages/admin/category/create-category/create-category.component';
import { ListCategoryComponent } from './pages/admin/category/list-category/list-category.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';


import {AuthenticationInterceptorProvider} from "./authentication.interceptor";



// @ts-ignore
@NgModule({
  imports: [
    NgZorroAntdModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
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
    ListCategoryComponent,
    EnumToArrayPipe,




  ],
  providers: [AuthenticationInterceptorProvider,
    { provide: NZ_I18N, useValue: en_US }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
