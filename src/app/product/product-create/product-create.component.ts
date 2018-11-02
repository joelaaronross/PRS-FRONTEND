import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
 
  product: Product = new Product();

  save(): void {
    this.productsvc.add(this.product)
    .subscribe(resp => {
      console.log("resp", resp);
      this.router.navigateByUrl('/products/list');
    });
  }
  constructor(
    private productsvc: ProductService,
    private router: Router
  ) { }
  ngOnInit() {
  }

}
