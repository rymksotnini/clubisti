import {ProjectStatus} from './enum/ProjectStatus';
import {Category} from './Category';



export class Project{

  private _id: number;

  private _name: string;

  private _last_updated_sum: number;

  private _shortDescription: string;

  private _amount: number;

  private _created_at: Date;

  private _updated_at: Date;

  private _status: string;

  private _categories: Category[];

  private _min_donation_amount: number;

  private _max_donation_amount: number;


  constructor(id: number=null, name: string=null,shortDescription: string=null, last_updated_sum: number=null,  amount: number=null,
              max_donation_amount: number=null, min_donation_amount:number=null, status:  string=null  ) {
    this._id = id;
    this._name = name;
    this._last_updated_sum = last_updated_sum;
    this._shortDescription = shortDescription;
    this._amount = amount;
    this._status = status;
    this._min_donation_amount = min_donation_amount;
    this._max_donation_amount = max_donation_amount;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get last_updated_sum(): number {
    return this._last_updated_sum;
  }

  set last_updated_sum(value: number) {
    this._last_updated_sum = value;
  }

  get shortDescription(): string {
    return this._shortDescription;
  }

  set shortDescription(value: string) {
    this._shortDescription = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get created_at(): Date {
    return this._created_at;
  }

  set created_at(value: Date) {
    this._created_at = value;
  }

  get updated_at(): Date {
    return this._updated_at;
  }

  set updated_at(value: Date) {
    this._updated_at = value;
  }




  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }

  get min_donation_amount(): number {
    return this._min_donation_amount;
  }

  set min_donation_amount(value: number) {
    this._min_donation_amount = value;
  }

  get max_donation_amount(): number {
    return this._max_donation_amount;
  }

  set max_donation_amount(value: number) {
    this._max_donation_amount = value;
  }
}
