import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
import { CustomernavComponent } from './components/customernav/customernav.component';
import { BannersComponent } from './components/banners/banners.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomernavComponent,
    BannersComponent,
    NavigationComponent,
    // HomeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
