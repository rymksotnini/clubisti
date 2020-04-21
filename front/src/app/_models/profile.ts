export class Profile {

  private _phone_number: number;
  private _gender: string;
  private _birth_date: Date;
  private _image_url: string;
  private _status: string;
  private _badge=null;
  private _address = null;

  get phone_number(): number {
    return this._phone_number;
  }

  set phone_number(value: number) {
    this._phone_number = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get birth_date(): Date {
    return this._birth_date;
  }

  set birth_date(value: Date) {
    this._birth_date = value;
  }

  get image_url(): string {
    return this._image_url;
  }

  set image_url(value: string) {
    this._image_url = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get badge(): any {
    return this._badge;
  }

  set badge(value: any) {
    this._badge = value;
  }

  get address(): any {
    return this._address;
  }

  set address(value: any) {
    this._address = value;
  }
}
