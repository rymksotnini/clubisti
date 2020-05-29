import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CrudService} from "../../../_services/crud.service";
import {Router} from "@angular/router";
import {AccountsService} from "../../../_services/accounts.service";
import {ACCOUNT, ACCOUNT_WITH_TYPE, API_URL, CURRENT_ORGANIZATION, DONATE} from "../../../_globals/global-variables";
import {AccountType} from "../../../_models/accountType";
import {Account} from "../../../_models/account";
import {AuthenticationService} from "../../../_services/authentication.service";

@Component({
  selector: 'app-charity-amount',
  templateUrl: './charity-amount.component.html',
  styleUrls: ['./charity-amount.component.css']
})
export class CharityAmountComponent implements OnInit {

  donation: FormGroup;
  amount: string;
  textSuccess = '';
  textError = '';
  success = false;
  error = false;
  @Input() id?: number;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              private accountsService: AccountsService,
              private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.donation = this.formBuilder.group({
      amount: ''
    });
  }

  onSubmit(){
    this.amount=this.donation.value.amount;
    const json ={
      transaction:{
        amount:this.amount
      },
      user:{
        id:this.authenticationService.getCurrentUser().id
      },
      offer:{
        id:this.id
      },
      account:{
        id:this.accountsService.getDefaultAccountID()
      }
    };
    this.crudService.post(API_URL + DONATE, json).subscribe(
      (response) => {
        this.success = true;
        this.textSuccess = 'Thank you for your contribution';
        this.router.navigateByUrl('admin', { skipLocationChange: true }).then(() => {
          this.router.navigate(['projects']);
        });
        console.log(response);
      }, (error =>{
        this.error = true;
        if (error.error) {
          this.textError = error.error;
        }
        else {
          this.textError ='Error';
        }
      })
    );
  }

}
