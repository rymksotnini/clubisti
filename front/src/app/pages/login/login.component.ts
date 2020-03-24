import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationService} from "../../authentication.service";
import {NgForm} from "@angular/forms";
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  user :User;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login(form: NgForm) {
    console.log("login button clicked");
    if (!this.authenticationService.isLogged()) {
      this.user = new User(null,null,null);
      this.user.setEmail(form.controls['email'].value);
      this.user.setPassword(form.controls['password'].value);
      console.log(this.user);
      this.authenticationService.login(this.user).subscribe(
        (result)=> {
          console.log("currently logging in...");
          const user: User = result.body;
          console.log("user: " + user);
          this.authenticationService.setCurrentUser(user);
          this.authenticationService.retrieveToken();
          window.location.href = 'http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/auth?response_type=code&scope=write%20read&client_id=' + this.authenticationService.getCurrentUser().getId() + '&redirect_uri='+ this.authenticationService.getRedirectUri();
        }
      )
    }
  }
}
