import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  // {
  //   path:'login', component:LoginComponent
  // }
  {
    path:'header', component:HeaderComponent
  },
  {
    path:'footer',component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
