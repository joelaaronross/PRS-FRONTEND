
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.class'

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  user: User = null;
  request: Request = new Request();
  users: User[];

  save(): void {
    this.requestsvc.create(this.request)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/requests/list');
      });
  }
  
  constructor(
    private sys: SystemService,
    private requestsvc: RequestService,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    this.request.userId = this.sys.user.id;
  }

}
