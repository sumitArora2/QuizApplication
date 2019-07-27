import { MypipePipe } from './../shared/pipe/mypipe.pipe';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouthingModule } from './dashboard-routing';
import { PrincipalDashboardModule } from './principal-dashboard/principal-dashboard.module';
import { StudentDashboardModule } from './student-dashboard/student-dashboard.module';
import { TeacherDashboardModule } from './teacher-dashboard/teacher-dashboard.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    MypipePipe,
  DetailsComponent],
  imports: [
    CommonModule,
    DashboardRouthingModule,
    PrincipalDashboardModule,
    StudentDashboardModule,
    TeacherDashboardModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class DashboardModule { }
