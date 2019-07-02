import { TeacherQuizComponent } from './teacher-dashboard/teacher-quiz/teacher-quiz.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalHomeComponent } from './principal-dashboard/principal-home/principal-home.component';
import { TeacherHomeComponent } from './teacher-dashboard/teacher-home/teacher-home.component';
import { StudentHomeComponent } from './student-dashboard/student-home/student-home.component';
import { StudentQuizComponent } from './student-dashboard/student-quiz/student-quiz.component';
import { DetailsComponent } from './details/details.component';
<<<<<<< HEAD
import { ComplaintsComponent } from './principal-dashboard/complaints/complaints.component';
=======
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
>>>>>>> 34f1093c97c3fa8e2af504cc431621bcf63f7fe1


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
<<<<<<< HEAD
  path:'complaints', component: ComplaintsComponent
=======
  path:'complaints', component:ComplaintsComponent
},
{
  path:'**',component:PageNotFoundComponent
>>>>>>> 34f1093c97c3fa8e2af504cc431621bcf63f7fe1
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouthingModule { }
