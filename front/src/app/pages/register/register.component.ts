import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';
import { User } from 'src/app/_models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user :User;
  constructor(private authenticationService: AuthenticationService, private router:Router) {}


  ngOnInit() {
  }


  registerFacebook() {
    console.log("helloo");
  }

  register(form: NgForm) {
    console.log('register button clicked');
    if (!this.authenticationService.isLogged()) {
      this.user = new User();
      this.user.setEmail(form.controls.email.value);
      this.user.setPassword(form.controls.password.value);
      this.user.setUserName(form.controls.username.value);
      this.user.setFirstName(form.controls.firstName.value);
      this.user.setLastName(form.controls.lastName.value);
      console.log(this.user);
      this.authenticationService.signup(this.user).subscribe(
        (result)=> {
          console.log('currently signing up...');
          this.authenticationService.savingUser(result);
          this.router.navigate(['/dashboard']);
        }
      )
    }

  }
}
