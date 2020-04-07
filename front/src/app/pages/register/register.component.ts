import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


  registerFacebook() {
    console.log("helloo")
    this.authenticationService.facebookLogin().subscribe(
      (response) => {
        console.log(response)
        console.log("hellossso")
      },
      (error => {
        console.log(error)
      })
    )
  }
}
