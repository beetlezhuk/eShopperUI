import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { LoginServiceService } from '../services/login/login-service.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
// import { User } from '../models/User';

@Injectable()
export class AuthRequestInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginServiceService, private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler){

        const isLogin: boolean = req.url.includes("login");
        // const isProfile: boolean = req.url.includes("profile");
        
        let authReq;

        if (!isLogin) {
            let token: string = localStorage.getItem("Authorization");

            authReq = req.clone({                
                headers: req.headers.set('Authorization', token)
            });

            return next.handle(authReq);
        }

        // if(isProfile) {
        //     if(this.loginService.isUserSessionExpired) {
        //         this.loginService.logout();
        //     }

            
                // authReq = req.clone({
                //     headers: req.headers.set('Authorization', rtoken )
                // });

        //         return next.handle(authReq);
        // }
        
        return next.handle(req);
    }
}