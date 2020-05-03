import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.callForProductsInCart();
  }

  public callForProductsInCart() {
    this.productsService.getCartItemsForCurrentLogedInUser().subscribe(result => this.cartItems = result);
  }
}