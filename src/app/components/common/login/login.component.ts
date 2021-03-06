import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginService: LoginServiceService;
  redirectUrl: string;

  constructor(loginService: LoginServiceService) { 
    this.loginService = loginService;
  }

  ngOnInit() {
  }

  onSubmitLogin(form: NgForm) {
    let username = form.value.email;
    let password = form.value.password;

    if (this.loginService.redirectUrl === "") {
      this.redirectUrl = environment.myProfileUrl;
    }

    this.loginService.login({username, password});
    
    // form.reset();
  }
}