import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SptgRoutingModule } from './sptg-routing.module';
import { SptgComponent } from './sptg.component';

@NgModule({
  declarations: [SptgComponent],
  imports: [
    CommonModule,
    SptgRoutingModule,
    SharedModule
  ]
})
export class SptgModule { }
