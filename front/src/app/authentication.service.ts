import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {User} from "./models/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private resourceUrl =  'http://localhost:8081/api/auth/';
  private redirectUri = 'http://localhost:4200/';
  private currentUser = new User();

  constructor(private http: HttpClient, private router:Router ) { }

  public signup(user :User):Observable<HttpResponse<any>>{
    return this.http.post<any>(this.resourceUrl+'signup', JSON.parse(JSON.stringify(user)),{observe: 'response' });
  }

  public login(user: User): Observable<HttpResponse<any>> {
    const headers = { 'Content-Type':'application/json'};
    const creds = { username: user.getEmail(), password: user.getPassword()};
    return this.http.post<any>(this.resourceUrl+'signin', JSON.stringify(creds) , { headers: headers, observe: 'response' });
  }

  //method get for current user from the backend
  public getUser(){
    return this.http.get('http://localhost:8081/user'+this.getCurrentUser().getId());
  }
  public logout(){
    console.log("logging out")
    localStorage.removeItem("token");
    this.router.navigate(['/history']);
  }
  public isLogged(): boolean{
    return localStorage.getItem("token")!=null;
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
