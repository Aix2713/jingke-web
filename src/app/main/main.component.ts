import { Component, OnInit } from '@angular/core';

const navItems: object[] = [
  { id: 1, text: '财税代理', url: 'csdl' },
  { id: 2, text: '工商注册', url: 'gszc' },
  { id: 3, text: '税盘托管', url: 'sptk' },
  { id: 4, text: '所得税汇缴清算', url: 'sdshjqs' },
];

const csItems: object[] = [
  { id: 1, text: '代理记账', url: 'csdl/dljz' },
  { id: 2, text: '一般纳税人资格认定', url: 'csdl/ybnsrzgrd' },
  { id: 3, text: '验资服务', url: 'csdl/yzfw' },
  { id: 4, text: '社保代办', url: 'csdl/sbdb' },
];
const gszcItems: object[] = [
  { id: 1, text: '公司注册流程', url: 'gszc/gszclc' },
  { id: 2, text: '公司名称变更登记申请', url: 'gszc/gsmcbgdjsq' },
  { id: 3, text: '公司住所变更登记申请', url: 'gszc/gszsbgdjsq' },
  { id: 4, text: '公司法定代表人变更登记申请', url: 'gszc/gsfddbrbgdjsq' },
  { id: 4, text: '公司注册资本变更登记申请', url: 'gszc/gszczbbgdjsq' },
  { id: 4, text: '工商注销', url: 'gszc/gszxlc' }
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  navItems = navItems;
  csItems = csItems;
  gszcItems = gszcItems;
  constructor() { }

  ngOnInit() {
  }

}
