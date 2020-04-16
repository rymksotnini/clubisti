import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AnonymousLayoutRoutes} from './anonymous-layout.routing';
import {HistoryComponent} from '../../pages/history/history.component';


import {DashboardComponent} from "../../pages/dashboard/dashboard.component";


@NgModule({
  declarations: [
    DashboardComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AnonymousLayoutRoutes),
  ]
})
export class AnonymousLayoutModule { }
