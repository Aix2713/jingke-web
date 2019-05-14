import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CsdlRoutingModule } from './csdl-routing.module';
import { CsdlComponent } from './csdl.component';

@NgModule({
  declarations: [CsdlComponent],
  imports: [
    CommonModule,
    CsdlRoutingModule,
    SharedModule
  ]
})
export class CsdlModule { }
