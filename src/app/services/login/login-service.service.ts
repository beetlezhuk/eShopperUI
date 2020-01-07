import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';``
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthTokenResponse } from 'src/app/models/AuthTokenResponse';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  user = new BehaviorSubject<User>(null);

  private idTokenKey: string = "idToken";
  private expiresInKey: string = "expiresIn";
  private registeredKey: string = "registered";
  private refreshTokenKey: string = "refreshToken";
  jwtDecoderService = new JwtHelperService();
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {}

  performLoginIsSuccessful(loginObject: {email: String, password: String}) {
    var successful: boolean = false;

      this
      .http
      .post<AuthTokenResponse>(environment.signInApiUrl, loginObject)
      .pipe(
        tap(result => {
          const expirationDate = new Date(new Date().getTime() + +result.expiresIn * 1000);
          const user = new User(result.email, result.localId, result.idToken, expirationDate);
          this.user.next(user);
          localStorage.setItem("currentUser", JSON.stringify(user));
        }),
        map(e  => {
        if(this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
        }        
        return e;
      }))
      .subscribe();
  }

  public isTokenValid(): boolean {
    var num: Number;

    if(this.userExists()) {
      this
        .http
        .post(environment.authApiUrl, this.loadUser().token, {observe: 'response'})
        .pipe(
          map(x => {
            num = x.status;
            return x.status;
          })).subscribe();
    }
    
    return num === 200;
  }

  userExists(): boolean {
    return !!this.loadUser();
  }

  loadUser(): User {
    let userData: {
      email: String, 
      id: String,
      token: String,
      tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem("currentUser"));

    let loadedUser = new User(userData.email, userData.id, userData.token, new Date(userData.tokenExpirationDate));
    this.user.next(loadedUser);

    return loadedUser;
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
