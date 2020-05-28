import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AnonymousLayoutRoutes} from './anonymous-layout.routing';
import {HistoryComponent} from '../../pages/history/history.component';


import {DashboardComponent} from "../../pages/dashboard/dashboard.component";
import {TestLandingComponent} from "../../pages/test-landing/test-landing.component";
import {ComponentsModule} from "../../components/components.module";
import {CharityProjectsComponent} from "../../pages/charity-projects/charity-projects.component";
import {NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    DashboardComponent,
    HistoryComponent,
    TestLandingComponent,
    CharityProjectsComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(AnonymousLayoutRoutes),
        ComponentsModule,
        NgbProgressbarModule,
    ]
})
export class AnonymousLayoutModule { }
