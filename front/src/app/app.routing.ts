import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {AnonymousLayoutComponent} from './layouts/anonymous-layout/anonymous-layout.component';
import {TemplateLayoutComponent} from './layouts/template-layout/template-layout.component';
import {FbAuthComponent} from './components/fb-auth/fb-auth.component';
import {SharedModule} from "./shared/shared.module";
import {TestLandingComponent} from "./pages/test-landing/test-landing.component";
import {AuthGuard} from "./_guards/auth.guard";
import {Role} from "./_models/enum/Role";
import {HomeUserComponent} from "./pages/home-user/home-user.component";

const routes: Routes =[
  { path: 'fblogin', component: FbAuthComponent },
  { path: 'user-home', component: HomeUserComponent},
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.Admin]},
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }, {
    path: '',
    component: AnonymousLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/anonymous-layout/anonymous-layout.module#AnonymousLayoutModule'
      }
    ]
  },{
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: 'template',
    component: TemplateLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/template-layout/template-layout.module#TemplateLayoutModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    SharedModule
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
