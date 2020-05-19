import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { TopbarLandingComponent } from './topbar-landing/topbar-landing.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HomeDescriptionComponent } from './home-description/home-description.component';
import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { HomeDonationsComponent } from './home-donations/home-donations.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AdminSidebarComponent,
    TopbarLandingComponent,
    HomeDescriptionComponent,
    HomeProjectsComponent,
    HomeDonationsComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AdminSidebarComponent,
    TopbarLandingComponent,
    HomeProjectsComponent,
    HomeDescriptionComponent,
    HomeDonationsComponent
  ]
})
export class ComponentsModule { }
