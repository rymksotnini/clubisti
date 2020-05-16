import {ProjectStatus} from './enum/ProjectStatus';
import {Category} from './Category';
import {Offer} from "./offer";



export class Project{

  private _id: number;

  private _last_updated_sum: number;

  private _created_at: Date;

  private _updated_at: Date;

  private _start_date: Date;

  private _end_date: Date;

  private _status: string;

  public offer: Offer;


  private _min_donation_amount: number;

  private _max_donation_amount: number;


  constructor(id: number=null,  last_updated_sum: number=null,
              max_donation_amount: number=null, min_donation_amount:number=null, status:  string=null, start_date: Date=null,
              end_date=null  ) {
    this._id = id;
    this._last_updated_sum = last_updated_sum;
    this._status = status;
    this._min_donation_amount = min_donation_amount;
    this._max_donation_amount = max_donation_amount;
    this._end_date = end_date;
    this._start_date = start_date;
  }


  get startDate(): Date {
    return this._start_date;
  }

  set startDate(value: Date) {
    this._start_date = value;
  }

  get endDate(): Date {
    return this._end_date;
  }

  set endDate(value: Date) {
    this._end_date = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }



  get lastUpdatedSum(): number {
    return this._last_updated_sum;
  }

  set lastUpdatedSum(value: number) {
    this._last_updated_sum = value;
  }



  get createdAt(): Date {
    return this._created_at;
  }

  set createdAt(value: Date) {
    this._created_at = value;
  }

  get updatedAt(): Date {
    return this._updated_at;
  }

  set updatedAt(value: Date) {
    this._updated_at = value;
  }

  get minDonationAmount(): number {
    return this._min_donation_amount;
  }

  set minDonationAmount(value: number) {
    this._min_donation_amount = value;
  }

  get maxDonationAmount(): number {
    return this._max_donation_amount;
  }

  set maxDonationAmount(value: number) {
    this._max_donation_amount = value;
  }
}
