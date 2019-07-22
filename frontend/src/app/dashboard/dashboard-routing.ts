import { StuDashoardComponent } from './student-dashboard/stu-dashoard/stu-dashoard.component';
import { StudentSubjectsComponent } from './student-dashboard/student-subjects/student-subjects.component';
import { QuizInstructionsComponent } from './student-dashboard/quiz-instructions/quiz-instructions.component';
import { SchoolSubjectsComponent } from './principal-dashboard/school-subjects/school-subjects.component';
import { SchoolClassesComponent } from './principal-dashboard/school-classes/school-classes.component';
import { TeacherQuizComponent } from './teacher-dashboard/teacher-quiz/teacher-quiz.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalHomeComponent } from './principal-dashboard/principal-home/principal-home.component';
import { TeacherHomeComponent } from './teacher-dashboard/teacher-home/teacher-home.component';
import { StudentHomeComponent } from './student-dashboard/student-home/student-home.component';
import { StudentQuizComponent } from './student-dashboard/student-quiz/student-quiz.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ComplaintsComponent } from './principal-dashboard/complaints/complaints.component';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './principal-dashboard/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'princiHome', component: PrincipalHomeComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
      { path: 'SchoolClass', component: SchoolClassesComponent,canActivate: [AuthGuard] },
      { path: 'SchoolSubject', component: SchoolSubjectsComponent,canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'teacherHome', component: TeacherHomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'teacherQuiz', component: TeacherQuizComponent,canActivate:[AuthGuard]
  },
  {
    path: 'studentHome', component: StudentHomeComponent, canActivate: [AuthGuard],
    children: [
      {path: 'studentDashboard', component: StuDashoardComponent,canActivate:[AuthGuard]},
      {path: 'studentSubject', component: StudentSubjectsComponent,canActivate:[AuthGuard]},
      { path: '**', redirectTo: 'studentDashboard', pathMatch: 'full' }
    ]
  },
  { path: 'quizInstruction', component: QuizInstructionsComponent,canActivate:[AuthGuard]},
  { path: 'studentQuiz', component: StudentQuizComponent,canActivate:[AuthGuard]},
  {
    path: 'details', component: DetailsComponent,canActivate:[AuthGuard]
  },
  {
    path: 'complaints', component: ComplaintsComponent,canActivate:[AuthGuard]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouthingModule { }
