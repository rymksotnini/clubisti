import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";
import {User} from "../../_models/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: User;
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.currentUser = this.authenticationService.getCurrentUser();
    console.log(this.currentUser.username);
  }

}
