import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
import { CustomernavComponent } from './components/user/customernav/customernav.component';
import { BannersComponent } from './components/user/banners/banners.component';
import { NavigationComponent } from './components/user/navigation/navigation.component';
import { HomeModule } from './modules/home/home.module';
import { ProductsComponent } from './components/user/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/user/home/home.component';
import { ProductsModule } from './modules/products/products.module';
import { AdminComponent } from './components/admin/admin.component';
import { ItemsComponent } from './components/admin/items/items.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { UserComponent } from './components/user/user.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'admin', component: ItemsComponent },
  { path: 'admin/items', component: ItemsComponent },
  { path: 'admin/orders', component: OrdersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomernavComponent,
    BannersComponent,
    NavigationComponent,
    AdminComponent,
    ItemsComponent,
    CategoriesComponent,
    CustomersComponent,
    OrdersComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
