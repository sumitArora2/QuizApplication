import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PrincipalHomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PrincipalDashboardModule { }
