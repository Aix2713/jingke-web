import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LxwmComponent } from './lxwm.component';

const routes: Routes = [
  { path: '', component: LxwmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LxwmRoutingModule { }
