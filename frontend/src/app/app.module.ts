import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './shared/profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
<<<<<<< HEAD
import {HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './shared/services/Authetication/auth-service.service';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 7ddbfc32d42483d023984bdc344cae36da74e7bf

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,  
    ProfileComponent,
    PageNotFoundComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    DashboardModule,
<<<<<<< HEAD
    // HttpClient,
=======
>>>>>>> 7ddbfc32d42483d023984bdc344cae36da74e7bf
    HttpClientModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
