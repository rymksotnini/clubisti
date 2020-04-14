import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-fb-auth',
  templateUrl: './fb-auth.component.html',
  styleUrls: ['./fb-auth.component.css']
})
export class FbAuthComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient, private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.facebookLogin().subscribe(params=> {
      console.log(params.token);
      localStorage.setItem('token',params.token);
      this.router.navigate(['/history']);
    });
  }

}
