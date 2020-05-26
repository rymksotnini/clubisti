import {Component, DoCheck, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import {User} from '../../_models/user';
import {ImageService} from '../../_services/image.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {ROUTES} from '../sidebar/sidebar.component';
import {IMG_URL} from '../../_globals/global-variables';
import {LocalService} from "../../_services/local.service";
import {MoneyTransferService} from "../../_services/money-transfer.service";

@Component({
  selector: 'app-topbar-landing',
  templateUrl: './topbar-landing.component.html',
  styleUrls: ['./topbar-landing.component.css']
})
export class TopbarLandingComponent implements OnInit, DoCheck {

  public connected = false;
  public focus;
  public listTitles: any[];
  public location: Location;
  public image;
  public balance;
  currentUser: User;
  constructor(
    private imageService:ImageService,
    location: Location,
    private element: ElementRef,
    private router: Router,
    private  authenticationService:AuthenticationService,
    private localService: LocalService,
    private moneyTransferService: MoneyTransferService
    ) {
    this.location = location;
  }


  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    console.log(this.authenticationService.isLogged());
    this.connected = this.authenticationService.isLogged();
    this.currentUser = this.authenticationService.getCurrentUser();
    console.log('houni');
    if(this.authenticationService.isLogged()){
      this.imageService.getImage().subscribe(
        (data) =>{
          console.log('data: '+data);
          console.log(IMG_URL + data);
          this.image = IMG_URL + data;
        },
        error => {
          console.log(error);
          this.image = 'assets/img/theme/team-4-800x800.jpg';
        }
      )
    }
  }

  ngDoCheck() {
    this.connected = this.authenticationService.isLogged();
    console.log('balance');
    console.log(this.balance);
  }

  init () {
    const address1= this.moneyTransferService.createAccount().address;
    this.moneyTransferService.initAccount(address1).
    then(async (retAccount: any) => {
      await this.moneyTransferService.getBal(address1).then((res)=>{
        console.log('what?');
        this.balance = res;
        console.log(res);
      }).catch((err)=>console.log('noooooooooooo'));
      console.log('najahna');
    }).catch((error) => {
      console.log('fchilna');
      console.log(error);
    });
  };
  logout(){
    this.authenticationService.logout().subscribe(
      (res) => {
        console.log('logging out');
        this.localService.clearToken();
        this.connected = false;
        this.image = null;
        this.currentUser = null;
        this.router.navigate(['/']);
      }
    );
  }
}
