import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  AUTHORIZATION_HEADER_KEY: string = "Authorization";
  statusCode: number;

  private idTokenKey: string = "idToken";
  jwtDecoderService = new JwtHelperService();
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  public login(loginObject: {username: string, password: string}) {
    let loginRequestObservable = this.performLoginRequest(loginObject);
    this.storeAuthorizationHeader(loginRequestObservable);
  }

  private performLoginRequest(loginObject: {username: string, password: string}): Observable<HttpResponse<any>> {
    return this.http.post(environment.loginUrl, loginObject, { observe: 'response'});    
  }

  private storeAuthorizationHeader(loginRequest: Observable<HttpResponse<any>>) {
    loginRequest.subscribe({
      next: res => {
        localStorage.setItem(this.AUTHORIZATION_HEADER_KEY, res.headers.get(this.AUTHORIZATION_HEADER_KEY));
        this.router.navigate([this.redirectUrl]);
      },
      error: error => console.log(error)
    })
  }

  public isUserSessionExpired() {
    let jwt = localStorage.getItem(this.idTokenKey);
    let pureJwt: string = jwt.replace("\"", "");
    return this.isJwtExpired(pureJwt);
  }

  private isJwtExpired(jwt: string): boolean {
    return this.jwtDecoderService.isTokenExpired(jwt);
  }  
}