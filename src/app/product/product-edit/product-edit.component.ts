import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  vendor: Vendor[];

  save(): void{
    this.productsvc.change(this.product)
    .subscribe(resp=>{
      console.log("resp", resp);
      this.router.navigateByUrl('/product/list');

    });
  }

  constructor(
    private productsvc: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
