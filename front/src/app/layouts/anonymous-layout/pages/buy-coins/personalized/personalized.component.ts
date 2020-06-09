import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {CrudService} from '../../../../../_services/crud.service';
import {AuthenticationService} from '../../../../../_services/authentication.service';
import {Router} from '@angular/router';
import {API_URL, PROFILE_BALANCE} from '../../../../../_globals/global-variables';

@Component({
  selector: 'app-personalized',
  templateUrl: './personalized.component.html',
  styleUrls: ['./personalized.component.scss']
})
export class PersonalizedComponent implements OnInit {

  constructor(private modal: NzModalService,
              private crudService: CrudService,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.modal.closeAll();
  }

  buyNow(amount: number) {
    const json = {
      balance: amount
    };
    this.crudService.update(API_URL + PROFILE_BALANCE, this.authenticationService.getCurrentUser().id, json).subscribe(
      (response) => {
        console.log(response.body.data);
        this.router.navigate(['/projects']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
