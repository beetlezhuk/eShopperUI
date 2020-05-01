import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/models/User';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-customernav',
  templateUrl: './customernav.component.html',
  styleUrls: ['./customernav.component.scss']
})
export class CustomernavComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }

}
