export class User {

  private id: number;
  private firstName: string;
  private lastName: string;
  private username: string;
  private email: string;
  private password: string;
  private badge = null ;
  private isDeleted = false;
  private profile = null ;
  private roles = null;
  private address = null;

  constructor(id: number=null, firstName: string=null, lastName: string=null, userName: string=null, email: string=null) {
    this.id = id;
    this.username = userName;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getId(): number {
    return this.id;
  }

  public setId(value: number) {
    this.id = value;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(value: string) {
    this.firstName = value;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(value: string) {
    this.lastName = value;
  }

  public getUserName(): string {
    return this.username;
  }

  public setUserName(value: string) {
    this.username = value;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(value: string) {
    this.email = value;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(value: string) {
    this.password = value;
  }
}
