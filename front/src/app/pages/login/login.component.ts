import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {NgForm} from '@angular/forms';
import {User} from '../../_models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  user :User;
  constructor(private authenticationService: AuthenticationService, private router:Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login(form: NgForm) {
    // @ts-ignore
    console.log('login button clicked');
    if (!this.authenticationService.isLogged()) {
      this.user = new User();
      this.user.email = form.controls.email.value;
      this.user.password = form.controls.password.value;
      console.log(this.user);
      this.authenticationService.login(this.user).subscribe(
        (result)=> {
          this.authenticationService.savingUser(result);
          this.router.navigate(['/dashboard']);
        }
      )
    }
  }
}
