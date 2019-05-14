import { Component, OnInit, Input } from '@angular/core';

const navItems: object[] = [
  { id: 1, text: '网站首页', url: '' },
  { id: 2, text: '财税代理', url: 'csdl' },
  { id: 3, text: '工商注册', url: 'gszc' },
  { id: 4, text: '税盘托管', url: 'sptk' },
  { id: 5, text: '所得税汇缴清算', url: 'sdshjqs' },
  { id: 5, text: '联系我们', url: 'lxwm' },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems = navItems;
  @Input() selectId = 0;
  constructor() { }

  ngOnInit() {
  }

}
