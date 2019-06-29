import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TeacherHomeComponent],
  imports: [
    CommonModule,RouterModule
  ]
})
export class TeacherDashboardModule { }
