import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import {FbAuthComponent} from './pages/fb-auth/fb-auth.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { ResetPasswdEmailComponent } from './pages/reset-passwd/reset-passwd-email/reset-passwd-email.component';
import { ResetPasswdCodeComponent } from './pages/reset-passwd/reset-passwd-code/reset-passwd-code.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    FbAuthComponent,
    ResetPasswdEmailComponent,
    ResetPasswdCodeComponent
  ]
})
export class AuthLayoutModule { }
