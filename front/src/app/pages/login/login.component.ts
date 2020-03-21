import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationService} from "../../authentication.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  user = new User();
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login(form: NgForm) {
    if (!this.authenticationService.isLogged()) {
      this.user.email = form.controls['email'].value;
      this.user.password = form.controls['password'].value;
      this.authenticationService.login(this.user).subscribe(
        (result)=> {
          this.authenticationService.retrieveToken();
          window.location.href = 'http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/auth?response_type=code&scope=write%20read&client_id=' + this.authenticationService.getClientId() + '&redirect_uri='+ this.authenticationService.redirectUri;
        }
      )
    }
  }
}
