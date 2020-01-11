import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/app/components/user/products/products.component';
import { ProductDetailComponent } from 'src/app/components/user/products/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
