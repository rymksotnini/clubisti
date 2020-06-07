import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AdminLoginComponent} from '../admin-layout/pages/admin-login/admin-login.component';
import {ResetPasswdEmailComponent} from './pages/reset-passwd/reset-passwd-email/reset-passwd-email.component';
import {ResetPasswdCodeComponent} from './pages/reset-passwd/reset-passwd-code/reset-passwd-code.component';



export const AuthLayoutRoutes: Routes = [
  { path: 'login',          component: LoginComponent },
  { path: 'register',       component: RegisterComponent },
  { path: 'register',       component: RegisterComponent },
  {path: 'recover/email', component: ResetPasswdEmailComponent},
  {path: 'recover/code', component: ResetPasswdCodeComponent}
];
