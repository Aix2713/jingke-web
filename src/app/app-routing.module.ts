import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './main/main.module#MainModule' },
  { path: 'csdl', loadChildren: './csdl/csdl.module#CsdlModule' },
  { path: 'csdl/:type', loadChildren: './csdl/csdl.module#CsdlModule' },
  { path: 'gszc', loadChildren: './gszc/gszc.module#GszcModule' },
  { path: 'gszc/:type', loadChildren: './gszc/gszc.module#GszcModule' },
  { path: 'sptg', loadChildren: './sptg/sptg.module#SptgModule' },
  { path: 'sdshjqs', loadChildren: './sdshjqs/sdshjqs.module#SdshjqsModule' },
  { path: 'lxwm', loadChildren: './lxwm/lxwm.module#LxwmModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
