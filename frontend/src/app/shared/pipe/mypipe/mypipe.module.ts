import { MypipePipe } from './mypipe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MypipePipe],
  imports: [
    CommonModule
  ],
  exports:[MypipePipe]
})
export class MypipeModule { }
