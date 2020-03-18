import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {AnonymousLayoutComponent} from './layouts/anonymous-layout/anonymous-layout.component';
import {TemplateLayoutComponent} from './layouts/template-layout/template-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
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
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '',
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
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
