import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { LoginServiceService } from '../services/login/login-service.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthRequestInterceptor implements HttpInterceptor {

    AUTHORIZATIO_HEADER_KEY: string = environment.authorizationHeaderKey;

    constructor(private loginService: LoginServiceService, private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler){

        const isLogin: boolean = req.url.includes("login");        
        let authReq;

        if (!isLogin) {
            let token: string = localStorage.getItem(this.AUTHORIZATIO_HEADER_KEY);

            authReq = req.clone({                
                headers: req.headers.set(this.AUTHORIZATIO_HEADER_KEY, token)
            });

            return next.handle(authReq);
        }
        
        return next.handle(req);
    }
}