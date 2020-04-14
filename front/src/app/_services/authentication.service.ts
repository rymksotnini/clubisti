import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {API_URL, CALLBACK, REDIRECT} from '../_globals/global-variables';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private resourceUrl =  'http://localhost:8000/api/';
  private redirectUri = 'http://localhost:4200/';
  private currentUser = new User();

  constructor(private http: HttpClient, private router:Router ) { }

  public signup(user :User):Observable<HttpResponse<any>>{
    // tslint:disable-next-line:max-line-length
    const creds = { username: user.getUserName(),first_name: user.getFirstName(),last_name:user.getLastName(),email: user.getEmail(), password: user.getPassword()};
    return this.http.post<any>(this.resourceUrl+'register', JSON.parse(JSON.stringify(creds)),{observe: 'response' });
  }

  public login(user: User): Observable<HttpResponse<any>> {
    const headers = { 'Content-Type':'application/json'};
    const creds = { email: user.getEmail(), password: user.getPassword()};
    return this.http.post<any>(this.resourceUrl+'login', JSON.stringify(creds) , { headers, observe: 'response' });
  }

  public facebookLogin(){
    return this.http.get<any>(API_URL + '/fblogin');
  }

  // method get for current user from the backend
  public getUser(){
    return this.http.get(this.resourceUrl+'users'+this.getCurrentUser().getId());
  }
  public logout(){
    return this.http.post<any>(this.resourceUrl+'logout', {observe: 'response' });
  }
  public isLogged(): boolean{
    return localStorage.getItem('token')!=null;
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
