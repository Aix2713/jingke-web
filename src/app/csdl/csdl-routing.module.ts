import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsdlComponent } from './csdl.component';

const routes: Routes = [
  { path: '', component: CsdlComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsdlRoutingModule { }
