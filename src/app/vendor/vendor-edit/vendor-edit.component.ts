import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor = new Vendor();

  save(): void {
    this.usersvc.add(this.vendor)
    .subscribe(resp => {
      console.log("resp", resp);
      this.router.navigateByUrl('/vendors/list');
    });
  }

  constructor(
    private usersvc: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
