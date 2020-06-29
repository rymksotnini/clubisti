export class BlockchainTransaction {
   private _amount: number;
  private _id_transaction: number;
   private _offer_id: number;
  private _user_id: number;

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get id_transaction(): number {
    return this._id_transaction;
  }

  set id_transaction(value: number) {
    this._id_transaction = value;
  }

  get offer_id(): number {
    return this._offer_id;
  }

  set offer_id(value: number) {
    this._offer_id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }


}
