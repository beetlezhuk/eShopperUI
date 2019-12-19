import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eShopperUI';
  path: String = "";

  constructor(router: Router) {
    router.events.subscribe((val) => {
      this.path = router.url;
      console.log(">>>>>>>>>>>>>>>" + this.path)
    })
  }

  isAdmin(): boolean {
    return this.path.includes("/admin");
  }
}
