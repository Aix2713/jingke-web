import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { BottomComponent } from './component/bottom/bottom.component';

@NgModule({
  declarations: [HeaderComponent, BottomComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, BottomComponent]
})
export class SharedModule { }
