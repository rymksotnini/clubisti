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
    console.log('helloo')
    this.authenticationService.facebookLogin().subscribe(
      (response) => {
        console.log(response)
        console.log('hellossso')
      },
      (error => {
        console.log(error)
      })
    )
  }

  register(form: NgForm) {
    console.log('register button clicked');
    if (!this.authenticationService.isLogged()) {
      this.user = new User();
      this.user.email = form.controls.email.value;
      this.user.password = form.controls.password.value;
      this.user.username = form.controls.username.value;
      this.user.firstName = form.controls.firstName.value;
      this.user.lastName = form.controls.lastName.value;
      console.log(this.user);
      this.authenticationService.signup(this.user).subscribe(
        (result)=> {
          console.log('currently signing up...');
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
