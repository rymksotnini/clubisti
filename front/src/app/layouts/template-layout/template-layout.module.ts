import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthLayoutRoutes} from '../auth-layout/auth-layout.routing';
import {TemplateLayoutRoutes} from './template-layout.routing';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';



@NgModule({
  declarations: [
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TemplateLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ]
})
export class TemplateLayoutModule { }
