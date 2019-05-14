import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GszcRoutingModule } from './gszc-routing.module';
import { GszcComponent } from './gszc.component';
import { GszclcComponent } from './gszclc/gszclc.component';
import { GsmcbgdjsqComponent } from './gsmcbgdjsq/gsmcbgdjsq.component';
import { GszsbgdjsqComponent } from './gszsbgdjsq/gszsbgdjsq.component';
import { GsfddbrbgdjsqComponent } from './gsfddbrbgdjsq/gsfddbrbgdjsq.component';
import { GszczbbgdjsqComponent } from './gszczbbgdjsq/gszczbbgdjsq.component';
import { GszxlcComponent } from './gszxlc/gszxlc.component';

@NgModule({
  declarations: [GszcComponent, GszclcComponent, GsmcbgdjsqComponent, GszsbgdjsqComponent, GsfddbrbgdjsqComponent, GszczbbgdjsqComponent, GszxlcComponent],
  imports: [
    CommonModule,
    GszcRoutingModule,
    SharedModule
  ]
})
export class GszcModule { }
