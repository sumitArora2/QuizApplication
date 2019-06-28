import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalHomeComponent } from './principal-dashboard/principal-home/principal-home.component';
import { TeacherHomeComponent } from './teacher-dashboard/teacher-home/teacher-home.component';
import { StudentHomeComponent } from './student-dashboard/student-home/student-home.component';
import { QuizComponent } from './student-dashboard/quiz/quiz.component';



const routes: Routes = [
 {
     path:'princiHome', component:PrincipalHomeComponent
 },
 {
     path:'teacherHome', component:TeacherHomeComponent
 },
 {
     path:'studentHome', component:StudentHomeComponent
 },
 {
     path:'quiz', component:QuizComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouthingModule { }
