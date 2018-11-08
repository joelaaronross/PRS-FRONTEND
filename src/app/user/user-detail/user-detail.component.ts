import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  isAdmin: boolean;
  user:User;

  delete(): void{
    this.usersvc.remove(this.user)
      .subscribe(resp =>{
        console.log("resp:", resp);
        this.router.navigateByUrl('/users/list');
      });
  }

  constructor(
    private sys: SystemService,
    private usersvc: UserService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
    .subscribe(resp => {
      console.log("resp: ", resp);
      this.user = resp.data;
    });
    this.isAdmin = (this.sys.user != null) ? this.sys.user.isAdmin : false;
  }

}
