import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system/system.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit() {
  }

}
