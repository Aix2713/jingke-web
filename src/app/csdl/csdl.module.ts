import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CsdlRoutingModule } from './csdl-routing.module';
import { CsdlComponent } from './csdl.component';
import { DljzComponent } from './dljz/dljz.component';
import { YzfwComponent } from './yzfw/yzfw.component';
import { SbdbComponent } from './sbdb/sbdb.component';

@NgModule({
  declarations: [CsdlComponent, DljzComponent, YzfwComponent, SbdbComponent],
  imports: [
    CommonModule,
    CsdlRoutingModule,
    SharedModule
  ]
})
export class CsdlModule { }
