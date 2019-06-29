import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouthingModule } from './dashboard-routing';
import { PrincipalDashboardModule } from './principal-dashboard/principal-dashboard.module';
import { StudentDashboardModule } from './student-dashboard/student-dashboard.module';
import { TeacherDashboardModule } from './teacher-dashboard/teacher-dashboard.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
  DetailsComponent],
  imports: [
    CommonModule,
    DashboardRouthingModule,
    PrincipalDashboardModule,
    StudentDashboardModule,
    TeacherDashboardModule
  ]
})
export class DashboardModule { }
