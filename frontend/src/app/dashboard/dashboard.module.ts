import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouthingModule } from './dashboard-routing';
import { PrincipalDashboardComponent } from './principal-dashboard/principal-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    PrincipalDashboardComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRouthingModule
  ]
})
export class DashboardModule { }
