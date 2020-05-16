import {Category} from "./Category";

export class Offer {
  private _id: number;

  private _name: string;

  private _shortDescription: string;

  private _longDescription: string;

  private _amount: number;

  private _created_at: Date;

  private _updated_at: Date;

  private _categories: Category[];


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

  get shortDescription(): string {
    return this._shortDescription;
  }

  set shortDescription(value: string) {
    this._shortDescription = value;
  }

  get longDescription(): string {
    return this._longDescription;
  }

  set longDescription(value: string) {
    this._longDescription = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }


  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
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
}
