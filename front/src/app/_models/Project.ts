import {ProjectStatus} from './enum/ProjectStatus';
import {Category} from './Category';


export class Project{

  private _id: number;

  private _name: string;

  private _lastUpdatedSum: number;

  private _shortDescription: string;

  private _amount: number;

  private _createdAt: Date;

  private _updatedAt: Date;

  private _status: ProjectStatus;

  private _categories: Category[];

   private _minDonationAmount: number;

  private _maxDonationAmount: number;

  // tslint:disable-next-line:max-line-length
  constructor(id: number=null, name: string=null, shortDescription: string=null, lastUpdatedSum: number=null, amount: number=null, maxDonationAmount: number=null, minDonationAmount: number=null,
              status : string=null ) {
    this._id = id;
    this._name = name;
    this._shortDescription = shortDescription;
    this._lastUpdatedSum = lastUpdatedSum;
    this._amount = amount;
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

  get lastUpdatedSum(): number {
    return this._lastUpdatedSum;
  }

  set lastUpdatedSum(value: number) {
    this._lastUpdatedSum = value;
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

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  get status(): ProjectStatus {
    return this._status;
  }

  set status(value: ProjectStatus) {
    this._status = value;
  }

  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }

  get minDonationAmount(): number {
    return this._minDonationAmount;
  }

  set minDonationAmount(value: number) {
    this._minDonationAmount = value;
  }

  get maxDonationAmount(): number {
    return this._maxDonationAmount;
  }

  set maxDonationAmount(value: number) {
    this._maxDonationAmount = value;
  }
}
