import { TeacherQuizComponent } from './teacher-dashboard/teacher-quiz/teacher-quiz.component';
import { ComplaintsComponent } from './principal-dashboard/complaints/complaints.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalHomeComponent } from './principal-dashboard/principal-home/principal-home.component';
import { TeacherHomeComponent } from './teacher-dashboard/teacher-home/teacher-home.component';
import { StudentHomeComponent } from './student-dashboard/student-home/student-home.component';
import { StudentQuizComponent } from './student-dashboard/student-quiz/student-quiz.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [
 {
     path:'princiHome', component:PrincipalHomeComponent
 },
 {
     path:'teacherHome', component:TeacherHomeComponent
 },
 {
  path:'teacherQuiz', component:TeacherQuizComponent
},
 {
     path:'studentHome', component:StudentHomeComponent
 },
 {
     path:'studentQuiz', component:StudentQuizComponent
 },
 {
   path:'details',component:DetailsComponent
 },
 {
  path:'complaints', component:ComplaintsComponent
},
{
  path:'**',component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouthingModule { }
