import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AnonymousLayoutRoutes} from './anonymous-layout.routing';
import {HistoryComponent} from '../../pages/history/history.component';
import {FbAuthComponent} from "../../components/fb-auth/fb-auth.component";

import {DashboardComponent} from "../../pages/dashboard/dashboard.component";


@NgModule({
  declarations: [
    DashboardComponent,
    HistoryComponent,
    FbAuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AnonymousLayoutRoutes),
  ]
})
export class AnonymousLayoutModule { }
