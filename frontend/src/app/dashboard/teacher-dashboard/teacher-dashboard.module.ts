
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { RouterModule } from '@angular/router';
import { TeacherQuizComponent } from './teacher-quiz/teacher-quiz.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TeacherHomeComponent, TeacherQuizComponent],
  imports: [
    CommonModule,RouterModule,
 
ReactiveFormsModule,FormsModule
  ]
})
export class TeacherDashboardModule { }
