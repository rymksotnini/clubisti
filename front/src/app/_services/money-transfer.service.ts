import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {INFURA_URL} from '../_globals/global-variables';
const tokenAbi = require('../../../truffle/build/contracts/MoneyTransfer1.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
declare let require: any;
declare let window: any;
const mnemonic = environment.mnemonic.toString().trim();
const provider = new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${environment.infuraApiKey}`);

// const contract = require('@truffle/contract');
// const transferContract = contract(tokenAbi);
@Injectable({
  providedIn: 'root'
})
export class MoneyTransferService {
  private account: any = null;
  private account1: any = null;
  private account2: any = null;
  private web3: any;
  private web3Provider: any;
  private httpProvider;
  private enable: any;
  transferContract: any;
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
      this.web3Provider = provider;
      this.httpProvider= new Web3.providers.HttpProvider(INFURA_URL);
      console.log(this.web3Provider);
    }
    console.log('transfer.service :: constructor :: window.ethereum');
    this.web3 = new Web3(this.web3Provider);
    console.log('transfer.service :: constructor :: this.web3');
    console.log(this.web3);
    this.artifactsToContract(tokenAbi)
      .then((MetaCoinAbstraction) => {
        this.transferContract = MetaCoinAbstraction;
        this.transferContract.deployed().then(deployed => {
          console.log('deployed');
          console.log(deployed);
          deployed.Transfer({}, (err, ev) => {
          });
        });
      });
  }

  public async artifactsToContract(artifacts) {
    if (!this.web3) {
      const delay = new Promise(resolve => setTimeout(resolve, 100));
      await delay;
      return await this.artifactsToContract(artifacts);
    }
    const contract = require('@truffle/contract');
    const contractAbstraction = contract(artifacts);
    contractAbstraction.setProvider(this.httpProvider);
    this.getAccount();
    return contractAbstraction;
  }

  public async getAccount(): Promise<any> { // make it simple back call for accounts
    console.log('transfer.service :: getAccount :: start');
    console.log(this.web3.eth);
    // this.web3.eth.getBalance('0x90b5B4F5a580a62848141114CaC48AC4ecF0B969', async (err, result) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    //   const balance = this.web3.utils.fromWei(result, 'ether');
    //   console.log(balance + ' ETH');
    // });
    if (this.account == null) {
      const accs = await this.web3.eth.getAccounts();
      if (accs.length>0){
        this.account = accs[0];
      }
      console.log(accs);
    }
  }

  // public async getUserBalance(): Promise<any> {
  //   const account = await this.getAccount();
  //   console.log('transfer.service :: getUserBalance :: account');
  //   console.log(account);
  //   return new Promise((resolve, reject) => {
  //     window.web3.eth.getBalance(account, (err, balance) => {
  //       console.log('transfer.service :: getUserBalance :: getBalance');
  //       console.log(balance);
  //       if (!err) {
  //         const retVal = {
  //           account,
  //           balance
  //         };
  //         console.log('transfer.service :: getUserBalance :: getBalance :: retVal');
  //         console.log(retVal);
  //         resolve(retVal);
  //       } else {
  //         reject({account: 'error', balance: 0});
  //       }
  //     });
  //   }) as Promise<any>;
  // }
  async initAccount(address){
    if (!this.transferContract) {
      return;
    }
    try {
      const deployedMetaCoin = await this.transferContract.deployed();
      console.log(deployedMetaCoin);
      console.log('deployed 1');
      console.log(this.account);
      console.log(address);
      return await deployedMetaCoin.initializeAccount(address,{from: this.account});
    } catch (e) {
      console.log(e);
    }
    // const that = this;
    // return new Promise((resolve, reject) => {
    //   const contract = require('@truffle/contract');
    //   const transferContract = contract(tokenAbi);
    //   transferContract.setProvider(that.web3Provider);
    //   transferContract.deployed().then((instance) => {
    //     console.log(instance);
    //     return instance.initializeAccount(
    //       // this.account2.address,
    //       address);
    //   }).catch((error)=> {console.log('heeeeeeeere'); return reject(error);})
    //   //   .then((amount) => {
    //   //   if (amount) {
    //   //     console.log(amount);
    //   //     return resolve(amount);
    //   //   }
    //   // }).catch((error) => {
    //   //   return reject(error);
    //   // });
    // });
  }
  createAccount(){
    return this.web3.eth.accounts.create();
  }
  async getBal(address){
    if (!this.transferContract) {
      return;
    }
    try {
      const deployedMetaCoin = await this.transferContract.deployed();
      console.log(deployedMetaCoin);
      console.log('deployed 2');
      console.log(this.account);
      console.log(address);
      return await deployedMetaCoin.getBalance(address, {from: this.account});
    } catch (e) {
      console.log(e);
    }
    // const that = this;
    // return new Promise((resolve, reject) => {
    //   const contract = require('@truffle/contract');
    //   const transferContract = contract(tokenAbi);
    //   transferContract.setProvider(that.web3Provider);
    //   transferContract.deployed().then((instance) => {
    //     return instance.getBalance(
    //       // this.account2.address,
    //       address);
    //   })
    //     .then((amount) => {
    //     if (amount) {
    //       console.log(amount);
    //       return resolve(amount);
    //     }
    //   }).catch((error) => {
    //     return reject(error);
    //   });
    // });
  }
  // transferAmount(sender, receiver,amount) {
  //   return new Promise((resolve, reject) => {
  //     console.log('transfer amount');
  //     transferContract.deployed().then((instance) => {
  //       console.log('deploying...');
  //       return instance.sendCoin(
  //         sender,
  //         receiver,
  //       // this.account2.address,
  //         amount);
  //     }).then((status) => {
  //       if (status) {
  //         return resolve({status: true});
  //       }
  //     }).catch((error) => {
  //       console.log(error);
  //       return reject('transfer.service error');
  //     });
  //   });
  // }
}
