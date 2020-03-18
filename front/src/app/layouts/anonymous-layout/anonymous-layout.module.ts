import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AnonymousLayoutRoutes} from './anonymous-layout.routing';
import {HistoryComponent} from '../../pages/history/history.component';



@NgModule({
  declarations: [
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AnonymousLayoutRoutes),
  ]
})
export class AnonymousLayoutModule { }
