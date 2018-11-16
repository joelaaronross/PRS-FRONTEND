import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  isAdmin: boolean;
  product:Product;

  delete(): void{
    this.productsvc.remove(this.product)
      .subscribe(resp =>{
        console.log("resp:", resp);
        this.router.navigateByUrl('/products/list');
      });
  }
  constructor(
    private sys: SystemService,
    private productsvc: ProductService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }
  
    ngOnInit() {
    // this.sys.checkForLogin();
    let id = this.route.snapshot.params.id;   
    this.productsvc.get(id)
    .subscribe(resp => {
      console.log("resp: ", resp);
      this.product = resp.data;
    });
    this.isAdmin = (this.sys.user != null) ? this.sys.user.isAdmin : false;
  }
    
  }
