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
import { CharitiesListComponent } from './pages/admin/charity/charities-list/charities-list.component';
import { CharityCreateComponent } from './pages/admin/charity/charity-create/charity-create.component';
import { CreateCategoryComponent } from './pages/admin/category/create-category/create-category.component';
import { ListCategoryComponent } from './pages/admin/category/list-category/list-category.component';
import {AuthenticationInterceptorProvider} from './_interceptors/authentication.interceptor';
import {AnonymousLayoutModule} from './layouts/anonymous-layout/anonymous-layout.module';
import { CharityUpdateComponent } from './pages/admin/charity/charity-update/charity-update.component';
import {FbAuthComponent} from './components/fb-auth/fb-auth.component';
import {SharedModule} from './shared/shared.module';
import { BadgesListComponent } from './pages/admin/badge/badges-list/badges-list.component';
import { BadgesCreateComponent } from './pages/admin/badge/badges-create/badges-create.component';
import { VariableComponent } from './pages/admin/variable/variable.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatFormFieldModule, MatIconModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {MultiSelectModule} from 'primeng/multiselect';

// @ts-ignore
@NgModule({
  imports: [
    PaginatorModule,
    TableModule,
    MatInputModule,
    BrowserModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AnonymousLayoutModule,
    SharedModule,
    FontAwesomeModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MultiSelectModule,
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
    CharityUpdateComponent,
    FbAuthComponent,
    BadgesListComponent,
    BadgesCreateComponent,
    VariableComponent,

  ],
  providers: [AuthenticationInterceptorProvider,
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
