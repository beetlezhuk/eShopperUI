import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public loginService: LoginServiceService) { 
    loginService.logout();
  }

  ngOnInit() {
  }

}
