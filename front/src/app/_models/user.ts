export class User {

  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _username: string;
  private _email: string;
  private _password: string;
  private _badge = null ;
  private _deleted = false;
  private _profile = null ;
  private _roles = null;
  private _address = null;

  // constructor(
  //   id: number,
  //   firstName: string,
  //   lastName: string,
  //   username: string,
  //   email: string,
  //   password: string,
  //   badge: any,
  //   deleted: boolean,
  //   profile: any,
  //   roles: any,
  //   address: any
  // ) {
  //   this._id = id;
  //   this._firstName = firstName;
  //   this._lastName = lastName;
  //   this._username = username;
  //   this._email = email;
  //   this._password = password;
  //   this._badge = badge;
  //   this._deleted = deleted;
  //   this._profile = profile;
  //   this._roles = roles;
  //   this._address = address;
  // }


  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get badge(): any {
    return this._badge;
  }

  set badge(value: any) {
    this._badge = value;
  }

  get deleted(): boolean {
    return this._deleted;
  }

  set deleted(value: boolean) {
    this._deleted = value;
  }

  get profile(): any {
    return this._profile;
  }

  set profile(value: any) {
    this._profile = value;
  }

  get roles(): any {
    return this._roles;
  }

  set roles(value: any) {
    this._roles = value;
  }

  get address(): any {
    return this._address;
  }

  set address(value: any) {
    this._address = value;
  }
}