import { Component, OnInit } from '@angular/core';
import {Web3Service} from '../../../../../util/web3.service';
import {AuthenticationService} from '../../../../../_services/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {API_URL, COMPLAIN, DETAILS, IMG_URL, TRANSACTIONS, VERIFY} from '../../../../../_globals/global-variables';
import {Complain} from '../../../../../_models/Complain';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../../../../../_services/crud.service';
import {ResponseBlockchain} from '../../../../../_models/ResponseBlockchain';
const clubisti_artifacts = require('../../../../../../../build/contracts/Test.json');
@Component({
  selector: 'app-verify-blockchain-complain',
  templateUrl: './verify-blockchain-complain.component.html',
  styleUrls: ['./verify-blockchain-complain.component.scss']
})
export class VerifyBlockchainComplainComponent implements OnInit {
  model = {
    receiver: '',
    balance: 0,
    account: ''
  };
  id: number;
  complain: Complain;
  clubisti: any;
  responseBlockchain: ResponseBlockchain;
  constructor( private web3Service: Web3Service,
               private matSnackBar: MatSnackBar,
               private route: ActivatedRoute,
               private crudService: CrudService, ) { }

  ngOnInit(): void {
    this.getComplain();
    // blockchain
    this.web3Service.artifactsToContract(clubisti_artifacts)
      .then((ClubistiAbstraction) => {
        this.clubisti = ClubistiAbstraction;
        this.clubisti.deployed().then(deployed => {
          console.log(deployed);
          this.getTransaction().then(
            (response) => {
              console.log(response);
            }
          );
        });
      });


  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  getComplain() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.crudService.getOne(API_URL +  COMPLAIN + DETAILS , this.id).subscribe(
        (res) => {
          console.log(res)
          this.complain = res.data;
          console.log(this.complain);
        },
        (error ) => {
          console.log(error);
        });
    });
  }

  sendToBack(response) {
    this.crudService.post(API_URL + TRANSACTIONS + VERIFY + '/' + this.complain.transaction.id, {
      transactions: response,
      complaint: this.complain
    }).subscribe(
      (result) => {

      this.responseBlockchain = result;
      console.log(this.responseBlockchain.beforeUpdate.user);
      },
      (error) => {console.log(error) ; }
    );
  }

  async getTransaction() {
    try {
      let numGroup = Math.trunc(this.complain.transaction.id / 10);
      if ((this.complain.transaction.id % 10) === 0) {
        numGroup = numGroup - 1;
      }
      const deployedClubisti = await this.clubisti.deployed();
      const transactions = await deployedClubisti.getTransactions.call(numGroup);
      console.log('transaction: ' + transactions);
      this.sendToBack(transactions);
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting transaction; see log.');
    }
  }

}
