import { Component, OnInit } from '@angular/core';

import { PurchaseRequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests:Request[];

  constructor(
   
    private purchaserequestsvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.purchaserequestsvc.list()
      .subscribe(resp => {
        console.log("Requests:", resp);
        this.requests = resp.data;
      });
  }

}
