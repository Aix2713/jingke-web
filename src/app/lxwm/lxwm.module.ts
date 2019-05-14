import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LxwmRoutingModule } from './lxwm-routing.module';
import { LxwmComponent } from './lxwm.component';

@NgModule({
  declarations: [LxwmComponent],
  imports: [
    CommonModule,
    LxwmRoutingModule,
    SharedModule
  ]
})
export class LxwmModule { }
