import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { LoginServiceService } from '../services/login/login-service.service';

@Injectable()
export class SignInFailureInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginServiceService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        if(req.url.includes("/client/sign-in")) {
            return next.handle(req).pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status !== 200) {
                      console.log("HERE");     
                      alert("User is not found");
                    }
                    return throwError(error);
                  }));
        }        
        
       return next.handle(req);
    }
}