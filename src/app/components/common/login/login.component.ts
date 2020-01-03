import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginService: LoginServiceService;

  constructor(loginService: LoginServiceService) { 
    this.loginService = loginService;
  }

  ngOnInit() {
  }

  onSubmitLogin(form: NgForm) {    
    let user: User = new User(form.value.email, form.value.password);
    this.loginService.performLoginIsSuccessful(user);
    form.reset();
  }

}
