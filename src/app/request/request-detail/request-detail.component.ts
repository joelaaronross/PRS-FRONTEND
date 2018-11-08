import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;

  review(): void {
    console.log("Review!");
    this.requestsvc.review(this.request.id)
      .subscribe(resp => {
        console.log("Request: resp:", resp);
        this.router.navigateByUrl('/requests/list');
      });
  }

  delete(): void {
    this.requestsvc.remove(this.request)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/requests/list');
      });
  }

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id)
      .subscribe(resp => {
        console.log("resp: ", resp);
        this.request = resp.data;
      });
  }

}
