import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { RouterModule } from '@angular/router';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SchoolClassesComponent } from './school-classes/school-classes.component';
import { SchoolSubjectsComponent } from './school-subjects/school-subjects.component';
@NgModule({
  declarations: [PrincipalHomeComponent, ComplaintsComponent, SchoolClassesComponent, SchoolSubjectsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrincipalDashboardModule { }
