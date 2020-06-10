import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AnonymousLayoutRoutes} from './anonymous-layout.routing';
import {NgbDropdownModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeDescriptionComponent} from './components/home/home-description/home-description.component';
import {HomeDonationsComponent} from './components/home/home-donations/home-donations.component';
import {HomeProjectsComponent} from './components/home/home-projects/home-projects.component';
import {CharityAmountComponent} from './pages/charity/charity-amount/charity-amount.component';
import {CharityProjectsComponent} from './pages/charity/charity-projects/charity-projects.component';
import {CreateComplainComponent} from './pages/complain/create-complain/create-complain.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DonationComponent} from './pages/donation/donation.component';
import {UpdateProfileComponent} from './pages/profile/update-profile/update-profile.component';
import {UserProfileComponent} from './pages/profile/user-profile/user-profile.component';
import {TestLandingComponent} from './pages/test-landing/test-landing.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MatSelectCountryModule} from '@angular-material-extensions/select-country';
import {BuyCoinsComponent} from './pages/buy-coins/buy-coins.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { ProjectDetailsComponent } from './pages/charity/project-details/project-details.component';
import {RoundProgressModule} from "angular-svg-round-progressbar";
import { PackageComponent } from './pages/buy-coins/package/package.component';
import { PersonalizedComponent } from './pages/buy-coins/personalized/personalized.component';
import { SlidePanelComponent } from './pages/buy-coins/slide-panel/slide-panel.component';
import {UtilModule} from "../../util/util.module";
import {Web3Service} from "../../util/web3.service";


@NgModule({
  declarations: [
    HomeDescriptionComponent,
    HomeDonationsComponent,
    HomeProjectsComponent,
    CharityAmountComponent,
    CharityProjectsComponent,
    CreateComplainComponent,
    DashboardComponent,
    DonationComponent,
    UpdateProfileComponent,
    UserProfileComponent,
    TestLandingComponent,
    BuyCoinsComponent,
    ProjectDetailsComponent,
    PackageComponent,
    PersonalizedComponent,
    SlidePanelComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(AnonymousLayoutRoutes),
    NgbProgressbarModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    MatSelectCountryModule,
    NgbDropdownModule,
    MatSnackBarModule,
    FormsModule,
    UtilModule
  ],
  exports: [
    RoundProgressModule
  ]
})
export class AnonymousLayoutModule { }
