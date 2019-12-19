import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/app/components/user/products/products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
