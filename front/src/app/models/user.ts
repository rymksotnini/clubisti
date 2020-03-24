export class User {

  private id: number;
  private userName: string;
  private email: string;
  private password: string;
  private badge = null ;
  private isDeleted : boolean = false;
  private profile = null ;
  private roles = null;
  private address = null;

  constructor(id: number, userName: string, email: string) {
    this.id = id;
    this.userName = userName;
    this.email = email;
  }

  public getId(): number {
    return this.id;
  }

  public setId(value: number) {
    this.id = value;
  }

  public getUserName(): string {
    return this.userName;
  }

  public setUserName(value: string) {
    this.userName = value;
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
