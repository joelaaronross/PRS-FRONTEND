import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
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
    this.vendorsvc.change(this.vendor)
    .subscribe(resp => {
      console.log("resp", resp);
      this.router.navigateByUrl('/vendors/list');
    });
  }

  constructor(
    private sys: SystemService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.vendor = resp.data;
      });
  }

}
