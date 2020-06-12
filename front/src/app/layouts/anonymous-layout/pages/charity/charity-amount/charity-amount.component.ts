import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Project} from '../../../../../_models/Project';
import {CrudService} from '../../../../../_services/crud.service';
import {AccountsService} from '../../../../../_services/accounts.service';
import {AuthenticationService} from '../../../../../_services/authentication.service';
import {API_URL, DEFAULT_ACCOUNT, DONATE} from '../../../../../_globals/global-variables';
import {ProjectsContribution} from '../../../../../_models/ProjectsContribution';

import {Web3Service} from '../../../../../util/web3.service';
import {MatSnackBar} from '@angular/material/snack-bar';
declare let require: any;
const clubisti_artifacts = require('../../../../../../../build/contracts/Test.json');
@Component({
  selector: 'app-charity-amount',
  templateUrl: './charity-amount.component.html',
  styleUrls: ['./charity-amount.component.css']
})
export class CharityAmountComponent implements OnInit {

  donation: FormGroup;
  amount: number;
  model = {
    receiver: '',
    balance: 0,
    account: ''
  };
  accounts: string[];
  textSuccess = '';
  textError = '';
  success = false;
  error = false;
  json = null;
  showBuy = false;
  clubisti: any;
  @Input() project?: ProjectsContribution;
  @Output() saved: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              private accountsService: AccountsService,
              private web3Service: Web3Service,
              private authenticationService: AuthenticationService,
              private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.donation = this.formBuilder.group({
      amount: ''
    });
    // blockchain
    this.watchAccount();
    this.web3Service.artifactsToContract(clubisti_artifacts)
      .then((ClubistiAbstraction) => {
        this.clubisti = ClubistiAbstraction;
        this.clubisti.deployed().then(deployed => {
          console.log(deployed);
          // deployed.Transfer({}, (err, ev) => {
          //   console.log('Transfer event came in transtra');
          // });
        });
      });
  }

  onSubmit() {
    this.amount = +this.donation.value.amount;
    console.log(this.project.lastUpdatedSum);
    console.log(this.amount);
    console.log(this.project.offer.amount);
    if (this.project.lastUpdatedSum + this.amount > this.project.offer.amount) {
      this.success = false;
      this.error = true;
      this.textError = 'Offer amount exceeded';
    } else {
      this.crudService.getAll(API_URL + DEFAULT_ACCOUNT).subscribe((response) => {
        const currentAccount: Account = response.data;
        this.json = {
          transaction: {
            amount: this.amount
          },
          user: {
            id: this.authenticationService.getCurrentUser().id
          },
          offer: {
            id: this.project?.offer?.id
          },
          account: {
            id: currentAccount.id
          }
        };
        this.crudService.post(API_URL + DONATE, this.json).subscribe(
          (resp) => {
            this.error = false;
            this.success = true;
            this.textSuccess = 'Thank you for your contribution';
            this.saved.emit(null);
            // this.router.navigateByUrl('admin', { skipLocationChange: true }).then(() => {
            //   this.router.navigate(['projects']);
            // });
            if (!resp.data) {
              // here we will call the blockchain
              this.sendTransactions(resp).then((result) => console.log(result));
              console.log(resp);
            }
          }, (error => {
            console.log(error);
            this.success = false;
            this.error = true;
            this.showBuy = true;
            if (error.error) {
              this.textError = error.error;
              if (error.status === 405) {
                this.showBuy = false;
              }
            } else {
              this.textError = 'Error';
            }
          })
        );
      });
    }
  }

  // blochain methods
  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
    });
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  async sendTransactions(transactions: any) {
    if (!this.clubisti) {
      this.setStatus('clubisti is not loaded, unable to send transaction');
      return;
    }
    console.log('Sending coins' + transactions );

    this.setStatus('Initiating transaction... (please wait)');
    try {
      const deployedClubisti = await this.clubisti.deployed();
      const transaction = await deployedClubisti.addDonation.sendTransaction(transactions.result, transactions.groupId, {from: '0xeFF6747441Df90737e851150562599E65cFE0AFc'});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

  async getTrans() {

    try {
      const deployedMetaCoin = await this.clubisti.deployed();
      console.log(deployedMetaCoin);
      const metaCoinBalance = await deployedMetaCoin.getTransactions.call(1);
      console.log('transaction: ' + metaCoinBalance);
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

}
