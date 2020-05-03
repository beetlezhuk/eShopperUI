import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private http: HttpClient) { }

  ngOnInit() {
    // this.loginService.isTokenValid().subscribe();    
  }

  onMyClick() {
    this.http.get(environment.myProfileUrl).subscribe();
  }

  onLogout() {
    this.loginService.logout();
  }

}
