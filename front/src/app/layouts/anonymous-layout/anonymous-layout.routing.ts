import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from '../../pages/register/register.component';
import {HistoryComponent} from '../../pages/history/history.component';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

export const AnonymousLayoutRoutes: Routes = [
  { path: 'history',          component: HistoryComponent },
  { path: 'dashboard',          component: DashboardComponent }
];
