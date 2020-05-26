import {Component, OnInit, ElementRef, DoCheck} from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';
import {User} from '../../_models/user';
import {ImageService} from '../../_services/image.service';
import {DomSanitizer} from '@angular/platform-browser';
import {IMG_URL} from '../../_globals/global-variables';
import {MoneyTransferService} from '../../_services/money-transfer.service';
import {LocalService} from '../../_services/local.service';

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
  isLogged : boolean;
  public image;
  currentUser: User;
  // tslint:disable-next-line:max-line-length
  constructor(private imageService:ImageService,location: Location,
              private element: ElementRef,
              private router: Router,
              private  authenticationService:AuthenticationService,
              private sanitizer : DomSanitizer,
              private moneyTransferService: MoneyTransferService,
              private localService: LocalService) {
    this.location = location;
  }


  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.connected = this.authenticationService.isLogged();
    this.currentUser = this.authenticationService.getCurrentUser();
    console.log(this.currentUser);
    this.isLogged = this.authenticationService.isLogged();
    console.log(this.isLogged);
    if(this.isLogged===true){
      this.imageService.getImage().subscribe(
        (data) =>{
          console.log('data: '+data);
          console.log(IMG_URL + data);
          this.image = IMG_URL + data; // 'https://clubisti.net/assets/img/'+ data | environment.apiUrl+'/assets/img/'+
        },
        error => {
          console.log(error);
          this.image = 'assets/img/theme/team-4-800x800.jpg';
        }
      );
    }
  }
  getTitle(){
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    // tslint:disable-next-line:prefer-for-of
    for(let item = 0; item < this.listTitles.length; item++){
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
        console.log('logging out');
        this.localService.clearToken();
        this.isLogged = false;
        this.image = null;
        this.currentUser = null;
        this.router.navigate(['/']);
      }
    );
  }

}
