import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { LoginServiceService } from '../services/login/login-service.service';

@Injectable()
export class AuthRequestInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginServiceService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler){

        const isProfile: boolean = req.url.includes("profile");

        if(isProfile) {
            console.log("Check");
            this.loginService.isTokenValid()
        }
        
        return next.handle(req);
    }
}