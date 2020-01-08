import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  onLogout() {
    this.loginService.logout();
  }

}
