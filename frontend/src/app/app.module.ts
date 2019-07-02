import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './shared/profile/profile.component';

=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './shared/profile/profile.component';
>>>>>>> 5a90a3054e821d43c6126218c38cf7851302581e

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    DashboardModule,
<<<<<<< HEAD
    
=======
>>>>>>> 5a90a3054e821d43c6126218c38cf7851302581e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
