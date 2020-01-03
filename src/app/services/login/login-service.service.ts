import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';``
import { HttpClient } from '@angular/common/http';
import { AuthTokenResponse } from 'src/app/models/AuthTokenResponse';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private idTokenKey: string = "idToken";
  private expiresInKey: string = "expiresIn";
  private registeredKey: string = "registered";
  private refreshTokenKey: string = "refreshToken";
  private encodedJwtKey: string = "encodedJwt";
  jwtDecoderService = new JwtHelperService();

  constructor(private http: HttpClient) {}

  performLoginIsSuccessful(loginObject: User) {
    var successful: boolean = false;

      this
      .http
      .post<AuthTokenResponse>("http://localhost:8080/client/sign-in", loginObject)
      .subscribe(x => { 
        console.log(x)
        localStorage.setItem(this.idTokenKey, JSON.stringify(x.idToken));
        localStorage.setItem(this.expiresInKey, JSON.stringify(x.expiresIn));
        localStorage.setItem(this.registeredKey, JSON.stringify(x.registered));
        localStorage.setItem(this.refreshTokenKey, JSON.stringify(x.refreshToken));
        localStorage.setItem(this.encodedJwtKey, JSON.stringify(x));
        successful = this.isTokenValid();
      });      
  }

  public isTokenValid(): boolean {
    // const jwt = localStorage.getItem(this.encodedJwtKey);
    const idToken = localStorage.getItem(this.idTokenKey);

    if(!this.isJwtExpired(idToken)) {
      this.http.post("http://localhost:8080/client/authenticate", JSON.parse(idToken)).subscribe(x => {console.log(x)});
    }

    return true;
  }

  public isUserSessionExpired() {
    const jwt = localStorage.getItem(this.encodedJwtKey);
    return this.isJwtExpired(jwt);
  }

  private isJwtExpired(jwt: string): boolean {
    return this.jwtDecoderService.isTokenExpired(jwt);
  }  
}
