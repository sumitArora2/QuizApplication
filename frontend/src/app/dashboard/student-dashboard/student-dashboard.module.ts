import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHomeComponent } from './student-home/student-home.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [StudentHomeComponent, QuizComponent],
  imports: [
    CommonModule
  ]
})
export class StudentDashboardModule { }
