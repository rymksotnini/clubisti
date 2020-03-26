import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../authentication.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    console.log("hello");
    this.authenticationService.getUser().subscribe(
      (result) => {
        console.log("in");
        console.log(result);
      }
    )

  }

}
