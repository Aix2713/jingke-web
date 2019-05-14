import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SdshjqsComponent } from './sdshjqs.component';

const routes: Routes = [
  { path: '', component: SdshjqsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SdshjqsRoutingModule { }
