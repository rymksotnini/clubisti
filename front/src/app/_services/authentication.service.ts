import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {User} from '../_models/user';
import {Router} from '@angular/router';
import {API_URL, CALLBACK, REDIRECT, URL} from '../_globals/global-variables';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private resourceUrl =  'http://back.clubisti.net/api/';
  private redirectUri = 'http://localhost:4200/';
  private currentUser = new User();

  constructor(private http: HttpClient, private router:Router ) { }

  public signup(user :User):Observable<HttpResponse<any>>{
    // tslint:disable-next-line:max-line-length
    const creds = { username: user.getUserName(),first_name: user.getFirstName(),last_name:user.getLastName(),email: user.getEmail(), password: user.getPassword()};
    return this.http.post<any>(API_URL+'/register', JSON.parse(JSON.stringify(creds)),{observe: 'response' });
  }

  public login(user: User): Observable<HttpResponse<any>> {
    const headers = { 'Content-Type':'application/json'};
    const creds = { email: user.getEmail(), password: user.getPassword()};
    return this.http.post<any>(API_URL+'/login', JSON.stringify(creds) , { headers, observe: 'response' });
  }

  public facebookLogin(id){
    const param = {param : id};
    return this.http.post<any>(API_URL+'/fblogin',JSON.stringify(param),{ observe: 'response' });
  }

  // method get for current user from the backend
  public getUser(){
    return this.http.get(API_URL+'users'+this.getCurrentUser().getId());
  }
  public logout(){
    return this.http.post<any>(API_URL+'/logout', {observe: 'response' });
  }
  public isLogged(): boolean{
    return localStorage.getItem('token')!=null;
  }

  public getRedirectUri(): string{
    return this.redirectUri;
  }

  public setCurrentUser(currentUser){
    this.currentUser.setId(currentUser.id);
    this.currentUser.setUserName(currentUser.username);
    this.currentUser.setFirstName(currentUser.first_name);
    this.currentUser.setLastName(currentUser.last_name);
    this.currentUser.setEmail(currentUser.email);
  }

  public getCurrentUser():User{
    return this.currentUser
  }

  public savingUser(result){
    console.log('currently logging in...');
    console.log('body',  result.body.user);
    this.setCurrentUser(JSON.parse(result.body.user));
    console.log('current user last name ' + this.getCurrentUser().getLastName());
    // @ts-ignore
    localStorage.setItem('token',result.body.token);
  }

}
