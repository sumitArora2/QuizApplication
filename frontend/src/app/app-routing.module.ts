import { ProfileComponent } from './shared/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {
  //   path:'login', component:LoginComponent
  // }
  {
  path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
  path:'home',component:HomeComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'header', component:HeaderComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
