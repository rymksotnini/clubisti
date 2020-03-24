import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {User} from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private resourceUrl =  'http://localhost:8081/';
  private redirectUri = 'http://localhost:4200/';
  private currentUser = null;

  constructor(private http: HttpClient ) { }

  public signup(user :User):Observable<HttpResponse<any>>{
    return this.http.post<any>(this.resourceUrl+'register', JSON.parse(JSON.stringify(user)),{observe: 'response' });
  }

  public login(user: User): Observable<HttpResponse<User>> {
    const headers = { 'Content-Type':'application/json'}
    console.log(JSON.stringify(user));
    return this.http.post<User>(this.resourceUrl+'login', JSON.stringify(user) , { headers:headers, observe: 'response' });
  }
  //method get for current user!
  public retrieveToken() {
    let params = new URLSearchParams();
    params.append('grant_type','authorization_code');
    params.append('client_id', this.currentUser.id);
    params.append('client_secret', 'newClientSecret');
    params.append('redirect_uri', this.redirectUri);

    let headers =
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Basic '+btoa(this.currentUser.id+":secret")});

    this.http.post('http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/token',
      params.toString(), { headers: headers })
      .subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Credentials'));
  }
  private saveToken(token) {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    const item = {
      value: token.access_token,
      expiry: expireDate
    };
    localStorage.setItem("access_token", JSON.stringify(item));
    console.log('Obtained Access token');
    window.location.href = 'http://localhost:8089';
  }

  public logout(){
    localStorage.removeItem("access_token");
  }
  public isLogged(): boolean{
    return localStorage.getItem("access_token")!=null;
  }

  public getRedirectUri(): string{
    return this.redirectUri;
  }

  public setCurrentUser(currentUser: User){
    this.currentUser = currentUser;
  }

  public getCurrentUser():User{
    return this.currentUser
  }
}
