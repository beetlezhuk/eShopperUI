import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../login/login-service.service';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private authService: LoginServiceService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.authService.redirectUrl = state.url;
        return this.authService.user.pipe(map(user => {
            const isAuth = !!user;

            if(isAuth) {
                return true;
            }

            this.router.navigate(['login'])
            return false;
        }));
    }  
    
    // redirectToLogin(): boolean {
    //     this.router.navigate(['login']);
    //     return false;
    // }
}