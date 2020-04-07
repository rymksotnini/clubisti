import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user';
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
    console.log('login button clicked');
    if (!this.authenticationService.isLogged()) {
      this.user = new User();
      this.user.setEmail(form.controls.email.value);
      this.user.setPassword(form.controls.password.value);
      console.log(this.user);
      this.authenticationService.login(this.user).subscribe(
        (result)=> {
          console.log('currently logging in...');
          console.log('body', result.body);
          const currentUser = new User();
          Object.assign(currentUser,result.body.user);
          console.log('user: ' + currentUser);
          console.log('token: ' + result.body.token);
          this.authenticationService.setCurrentUser(currentUser);
          localStorage.setItem('token',result.body.token);
          this.router.navigate(['/history']);
        }
      )
    }
  }
}
