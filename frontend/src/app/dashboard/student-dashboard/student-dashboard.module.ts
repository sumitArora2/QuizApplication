import { ModalModule } from 'ngx-bootstrap/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentQuizComponent } from './student-quiz/student-quiz.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizInstructionsComponent } from './quiz-instructions/quiz-instructions.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';

import { StuDashoardComponent } from './stu-dashoard/stu-dashoard.component';


@NgModule({
  declarations: [StudentHomeComponent, StudentQuizComponent, QuizInstructionsComponent, StudentSubjectsComponent, StuDashoardComponent],
  imports: [
    CommonModule,RouterModule,FormsModule,ReactiveFormsModule,
    ModalModule.forRoot()
  ]
})
export class StudentDashboardModule { }
