import { Component, OnInit, Injectable } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  list: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.callForProducts();
  }

  callForProducts() {
    this
    .productsService
    .getAllProducts()
    .subscribe(result => this.list = result);    
  }  
}