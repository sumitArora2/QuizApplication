import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { RouterModule } from '@angular/router';
import { ComplaintsComponent } from './complaints/complaints.component';

@NgModule({
  declarations: [PrincipalHomeComponent, ComplaintsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PrincipalDashboardModule { }
