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
     path:'princiHome', component:PrincipalHomeComponent,canActivate:[AuthGuard],children:[
       { path:'dashboard',component:DashboardComponent },
       { path:'SchoolClass', component:SchoolClassesComponent},
     { path:'SchoolSubject',component:SchoolSubjectsComponent}
     ]
 },
 {
     path:'teacherHome', component:TeacherHomeComponent,canActivate:[AuthGuard]
     
 },
 {
  path:'teacherQuiz', component:TeacherQuizComponent
},
 {
     path:'studentHome', component:StudentHomeComponent,canActivate:[AuthGuard]

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
