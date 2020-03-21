import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams, HTTP_INTERCEPTORS, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authenticationService.isLogged()) {
      const newRequest = request.clone(
        {
          headers: new HttpHeaders({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Bearer '+localStorage.getItem("access_token")})
        }
      );
      return next.handle(newRequest);

    }else {
      return next.handle(request);
    }
  }
}
export const AuthenticationInterceptorProvider = {
  provide:HTTP_INTERCEPTORS,
  useClass  :AuthenticationInterceptor,
  multi: true
};
