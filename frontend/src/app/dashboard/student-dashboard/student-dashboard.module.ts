import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentQuizComponent } from './student-quiz/student-quiz.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizInstructionsComponent } from './quiz-instructions/quiz-instructions.component';



@NgModule({
  declarations: [StudentHomeComponent, StudentQuizComponent, QuizInstructionsComponent],
  imports: [
    CommonModule,RouterModule,FormsModule,ReactiveFormsModule
  ]
})
export class StudentDashboardModule { }
