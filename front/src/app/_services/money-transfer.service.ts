import { Injectable } from '@angular/core';
const Web3 = require('web3');
declare let require: any;
declare let window: any;
const tokenAbi = require('../../../truffle/build/contracts/MoneyTransfer.json');
@Injectable({
  providedIn: 'root'
})
export class MoneyTransferService {
  constructor() { }
}
