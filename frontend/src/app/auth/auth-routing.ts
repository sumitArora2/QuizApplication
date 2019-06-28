
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    // {
    //     path:'',redirectTo:'login',pathMatch:'full'  //first page that we want to show in web
    // },
  {
    path:'login', component:LoginComponent
  },
  {
      path:'signup', component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouthingModule { }
