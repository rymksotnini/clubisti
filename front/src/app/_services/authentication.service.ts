import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {User} from '../_models/user';
import {Router} from '@angular/router';
import {API_URL, CALLBACK, REDIRECT} from '../_globals/global-variables';

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
    const creds = { username: user.username,first_name: user.firstName,last_name:user.lastName,email: user.email, password: user.password};
    return this.http.post<any>(API_URL+'/register', JSON.parse(JSON.stringify(creds)),{observe: 'response' });
  }

  public login(user: User): Observable<HttpResponse<any>> {
    const headers = { 'Content-Type':'application/json'};
    const creds = { email: user.email, password: user.password};
    return this.http.post<any>(API_URL+'/login', JSON.stringify(creds) , { headers, observe: 'response' });
  }

  public facebookLogin(id){
    const param = {param : id};
    return this.http.post<any>(API_URL+'/fblogin',JSON.stringify(param),{ observe: 'response' });
  }

  // method get for current user from the backend
  public getUser(){
    return this.http.get(API_URL+'users'+this.getCurrentUser().id);
  }
  public logout(){
    localStorage.removeItem('currentUser');
    return this.http.post<any>(API_URL+'/logout', {observe: 'response' });
  }
  public isLogged(): boolean{
    return localStorage.getItem('token')!=null;
  }

  public getRedirectUri(): string{
    return this.redirectUri;
  }

  public setCurrentUser(currentUser){
    console.log('ahla');
    this.currentUser = new User();
    this.currentUser.id =currentUser.id;
    this.currentUser.username =currentUser.username;
    this.currentUser.firstName = currentUser.first_name;
    this.currentUser.lastName = currentUser.last_name;
    this.currentUser.email = currentUser.email;
  }

  public getCurrentUser():User{
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user==null){
      console.log('here');
      return this.currentUser;
    }
    console.log('2');
    console.log('user: ' + user);
    this.setCurrentUser(user);
    return this.currentUser;
  }

  public savingUser(result){
    this.currentUser = new User();
    console.log('currently logging in...');
    console.log('body',  result.body.user);
    localStorage.setItem('currentUser',result.body.user);
    this.setCurrentUser(JSON.parse(result.body.user));
    console.log('current user last name ' + this.getCurrentUser().lastName);
    // @ts-ignore
    localStorage.setItem('token',result.body.token);
  }

}
