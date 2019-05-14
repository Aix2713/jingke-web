import { Component, OnInit } from '@angular/core';
import { navItems } from '../main/main.component';

@Component({
  selector: 'app-lxwm',
  templateUrl: './lxwm.component.html',
  styleUrls: ['./lxwm.component.css']
})
export class LxwmComponent implements OnInit {

  navItems = navItems;
  constructor() { }

  ngOnInit() {
  }

}
