import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
import {AuthenticationInterceptorProvider} from "./authentication.interceptor";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AnonymousLayoutComponent,
    TemplateLayoutComponent,
  ],
  providers: [AuthenticationInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
