import { Component, OnInit } from '@angular/core';

import {Menu} from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "/home", "The Home Page"),
    new Menu("Users", "/users/list", "The User list"),
    new Menu("Vendors", "/vendors/list", "The Vendor list"),
    new Menu("Products", "/products/list", "The Product list"),
    new Menu("Requests", "/requests/list", "The Request list" ),
    new Menu("About", "/about", "The about page")
  ];

  constructor() { }

  ngOnInit() {
  }

}
