import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SdshjqsRoutingModule } from './sdshjqs-routing.module';
import { SdshjqsComponent } from './sdshjqs.component';

@NgModule({
  declarations: [SdshjqsComponent],
  imports: [
    CommonModule,
    SdshjqsRoutingModule,
    SharedModule
  ]
})
export class SdshjqsModule { }
