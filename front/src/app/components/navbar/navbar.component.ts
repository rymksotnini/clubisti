import {Component, OnInit, ElementRef, DoCheck} from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,DoCheck {
  public connected = false;
  public focus;
  public listTitles: any[];
  public location: Location;
  // tslint:disable-next-line:max-line-length
  constructor(location: Location,  private element: ElementRef, private router: Router, private  authenticationService:AuthenticationService) {
    this.location = location;
  }


  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    console.log(this.authenticationService.isLogged());
    this.connected = this.authenticationService.isLogged();
  }
  getTitle(){
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  ngDoCheck() {
    this.connected = this.authenticationService.isLogged();
  }

  logout(){
    this.authenticationService.logout().subscribe(
      (res) => {
        // @ts-ignore
        console.log('logging out');
        // @ts-ignore
        localStorage.removeItem('token');
        this.router.navigate(['/dashboard']);
      }
    );
  }

}
