import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../login/login-service.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private authService: LoginServiceService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        let isValid: boolean = false;
        isValid = this.authService.isTokenValid();
        
        if(isValid) {
            return true;
        } else {
            this.authService.redirectUrl = state.url;
            this.router.navigate(['login'])
            return false;
        }
    }    
}