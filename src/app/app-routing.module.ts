import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './main/main.module#MainModule' },
  { path: 'csdl', loadChildren: './csdl/csdl.module#CsdlModule' },
  { path: 'csdl/:type', loadChildren: './csdl/csdl.module#CsdlModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
