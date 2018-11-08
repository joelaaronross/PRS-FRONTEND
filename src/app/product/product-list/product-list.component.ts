import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  isAdmin: boolean
  products:Product[];
  

  constructor(private productsvc: ProductService, 
    private sys: SystemService
    ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    this.productsvc.list()
      .subscribe(resp =>{
        console.log('Products:', resp.data);
        this.products=resp.data
      });
      this.isAdmin = (this.sys.user != null) ? this.sys.user.isAdmin : false;
  }

}
