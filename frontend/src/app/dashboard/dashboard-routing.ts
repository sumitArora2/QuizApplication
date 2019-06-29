import { TeacherQuizComponent } from './teacher-dashboard/teacher-quiz/teacher-quiz.component';
import { ComplaintsComponent } from './principal-dashboard/complaints/complaints.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalHomeComponent } from './principal-dashboard/principal-home/principal-home.component';
import { TeacherHomeComponent } from './teacher-dashboard/teacher-home/teacher-home.component';
import { StudentHomeComponent } from './student-dashboard/student-home/student-home.component';
<<<<<<< HEAD
import { StudentQuizComponent } from './student-dashboard/student-quiz/student-quiz.component';
=======
import { DetailsComponent } from './details/details.component';

>>>>>>> 5b4d31cf45f0c270d7eb57bfa7f3bb7a46e845a9

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
<<<<<<< HEAD
     path:'studentQuiz', component:StudentQuizComponent
 }
=======
   path:'details',component:DetailsComponent
 },
 {
  path:'complaints', component:ComplaintsComponent
}
>>>>>>> 5b4d31cf45f0c270d7eb57bfa7f3bb7a46e845a9
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouthingModule { }
