import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { RouterModule } from '@angular/router';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrincipalHomeComponent, ComplaintsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class PrincipalDashboardModule { }
