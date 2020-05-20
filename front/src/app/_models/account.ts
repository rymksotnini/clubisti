import {AccountType} from "./accountType";

export class Account{

  private _id: number;
  private account_number: string;
  private _deleted: boolean;
  private created_at: Date;
  private updated_at: Date;
  private _accountType: AccountType;

  public getAccountNumber(): string{
    return this.account_number;
  }

  public setAccountNumber(number: string){
    this.account_number = number;
  }

  public getCreatedAt():Date{
    return this.created_at;
  }

  public getUpdatedAt():Date{
    return this.created_at;
  }

  get id(): number {
    return this._id;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  get accountType(): AccountType {
    return this._accountType;
  }

  get deleted(): boolean {
    return this._deleted;
  }

  set deleted(value: boolean) {
    this._deleted = value;
  }
}
