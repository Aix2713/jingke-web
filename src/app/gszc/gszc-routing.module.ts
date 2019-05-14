import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GszcComponent } from './gszc.component';

const routes: Routes = [
  { path: '', component: GszcComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GszcRoutingModule { }
