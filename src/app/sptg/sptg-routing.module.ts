import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SptgComponent } from './sptg.component';

const routes: Routes = [
  { path: '', component: SptgComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SptgRoutingModule { }
