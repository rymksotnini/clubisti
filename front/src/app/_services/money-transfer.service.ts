import { Injectable } from '@angular/core';
import {INFURA_URL} from '../_globals/global-variables';
const Web3 = require('web3');
const Accounts = require('web3-eth-accounts');
const accounts = new Accounts(INFURA_URL);
declare let require: any;
declare let window: any;
const tokenAbi = require('../../../truffle/build/contracts/MoneyTransfer.json');
@Injectable({
  providedIn: 'root'
})
export class MoneyTransferService {
  private account: any = null;
  private web3: any;
  private web3Provider: any;
  private enable: any;
  constructor() {
    // if (window.ethereum === undefined) {
    //   console.log('Non-Ethereum browser detected. Install MetaMask');
    // } else {
    if (typeof window.web3 !== 'undefined') {
      window.ethereum.enable().then(() => {
        this.web3Provider = window.web3.currentProvider;
      });
    } else {
      Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
      this.web3Provider = new Web3.providers.HttpProvider(INFURA_URL);
    }
    console.log('transfer.service :: constructor :: window.ethereum');
    this.web3 = new Web3(this.web3Provider);
    console.log('transfer.service :: constructor :: this.web3');
    console.log(this.web3);
    // }
  }

  public async getAccount(): Promise<any> { // make it simple back call for accounts
    console.log('transfer.service :: getAccount :: start');
    if (this.account == null) {
      this.account = await new Promise((resolve, reject) => {
        console.log('transfer.service :: getAccount :: eth');
        console.log('eth '+ JSON.stringify(this.web3.currentProvider));
        this.web3.eth.getAccounts((err, retAccount) => {
          console.log('transfer.service :: getAccount: retAccount');
          console.log(retAccount);
          if (retAccount.length > 0) {
            this.account = retAccount[0];
            resolve(this.account);
          } else {
            this.web3.eth.accounts.wallet.create(1);
            const currentAccount = this.web3.eth.accounts.create('hello');
            this.web3.eth.accounts.wallet.add(currentAccount);
            console.log(this.web3.eth.getAccounts());
            // alert('transfer.service :: getAccount :: no accounts found.');
            // reject('No accounts found.');
          }
          if (err != null) {
            alert('transfer.service :: getAccount :: error retrieving account');
            reject('Error retrieving account');
          }
        });
      }) as Promise<any>;
    }
    return Promise.resolve(this.account);
  }
}
