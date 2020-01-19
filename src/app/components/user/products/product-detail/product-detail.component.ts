import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductDetails();
  }

  public getProductDetails() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this
    .productService
    .getProductDetailsById(id)
    .subscribe(product => this.product = product);
  }

}
