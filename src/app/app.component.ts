import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './services/login/login-service.service';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'eShopperUI';
  path: String = "";

  constructor(router: Router, private loginService: LoginServiceService) {
    router.events.subscribe((val) => {
      this.path = router.url;
      console.log(">>>>>>>>>>>>>>>" + this.path)
    })
  }

  ngOnInit(): void {
    this.loginService.loadUser();
  }

  isAdmin(): boolean {
    return this.path.includes("/admin");
  }
}
