import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
// @Injectable()
export class ProductsComponent implements OnInit {

  private name: String = "";
  list: Array<Product> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.callForProducts();
  }

  callForProducts() {
    
    this.http.get<Array<Product>>("http://localhost:8080/products/all")
    .subscribe(data => this.list = data);

    this.list.forEach(element => {
      console.log(element.name);  
    });
    
  }
  
}
