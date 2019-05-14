import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { csItems } from '../main/main.component';

@Component({
  selector: 'app-csdl',
  templateUrl: './csdl.component.html',
  styleUrls: ['./csdl.component.css']
})
export class CsdlComponent implements OnInit {

  pageType = '';
  csItems = csItems;
  constructor(
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const me = this;
    // 获取大平台登陆用户数据
    this.activateRoute.params.subscribe(data => {
      me.pageType = data.type;
    });
  }

}
