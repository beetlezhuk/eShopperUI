import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';``
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthTokenResponse } from 'src/app/models/AuthTokenResponse';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private idTokenKey: string = "idToken";
  private expiresInKey: string = "expiresIn";
  private registeredKey: string = "registered";
  private refreshTokenKey: string = "refreshToken";
  jwtDecoderService = new JwtHelperService();
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {}

  performLoginIsSuccessful(loginObject: User) {
    var successful: boolean = false;

      this
      .http
      .post<AuthTokenResponse>(environment.signInApiUrl, loginObject)
      .pipe(map(e  => {
        if(this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
        }        
        return e;
      }))
      .subscribe(x => {
        localStorage.setItem(this.idTokenKey, JSON.stringify(x.idToken));
        localStorage.setItem(this.expiresInKey, JSON.stringify(x.expiresIn));
        localStorage.setItem(this.registeredKey, JSON.stringify(x.registered));
        localStorage.setItem(this.refreshTokenKey, JSON.stringify(x.refreshToken));
      });
  }

  public isTokenValid(): boolean {
    const idToken = localStorage.getItem(this.idTokenKey);
    var num: Number;
    

    if(idToken != undefined) {
      if(!this.isUserSessionExpired()) {

        this
        .http
        .post(environment.authApiUrl, JSON.parse(idToken), {observe: 'response'})
        .pipe(
          map(x => {
            num = x.status;
            return x.status;
          })).subscribe();
      }
      return num != 401;
    }
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
