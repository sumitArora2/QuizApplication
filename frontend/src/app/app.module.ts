import { ComplaintServiceService } from './shared/services/Complaints/complaint-service.service';
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
import {HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './shared/services/Authetication/auth-service.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    HttpClientModule,
    BrowserAnimationsModule,

    FlashMessagesModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass:'toast-top-right',
      tapToDismiss:false,
    }),

  ],
  providers: [AuthServiceService,AuthGuard,ComplaintServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
