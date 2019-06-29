import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentQuizComponent } from './student-quiz/student-quiz.component';


@NgModule({
  declarations: [StudentHomeComponent, StudentQuizComponent],
  imports: [
    CommonModule
  ]
})
export class StudentDashboardModule { }
