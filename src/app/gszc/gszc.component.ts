import { Component, OnInit } from '@angular/core';
import { gszcItems } from '../main/main.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gszc',
  templateUrl: './gszc.component.html',
  styleUrls: ['./gszc.component.css']
})
export class GszcComponent implements OnInit {

  gszcItems = gszcItems;
  pageType = '';
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
