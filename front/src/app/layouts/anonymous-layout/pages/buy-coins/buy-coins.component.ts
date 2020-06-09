import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {CrudService} from '../../../../_services/crud.service';
import {AuthenticationService} from '../../../../_services/authentication.service';
import {API_URL, PROFILE_BALANCE} from '../../../../_globals/global-variables';

@Component({
  selector: 'app-buy-coins',
  templateUrl: './buy-coins.component.html',
  styleUrls: ['./buy-coins.component.scss']
})
export class BuyCoinsComponent implements OnInit {

  isLeftVisible = true;

  constructor() { }

  ngOnInit(): void {
  }
}
