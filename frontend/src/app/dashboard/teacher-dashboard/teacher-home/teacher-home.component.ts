import { AuthServiceService } from './../../../shared/services/Authetication/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {
  role:any
  constructor(private authService:AuthServiceService,private flashMessage:FlashMessagesService,private router:Router) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.role=this.authService.getUserDetails()
      if(this.role==="student"){
        this.router.navigate(['studentHome']);
      }
      else if(this.role==="teacher"){
        this.router.navigate(['teacherHome']);
      }else if(this.role==="principal"){
        this.router.navigate(['princiHome']);
      }else{
        this.router.navigate(['login']);
      }
    }
  }
  Logoutclick()
  {
    this.authService.logout();
    this.flashMessage.show('you are logged out', {
      cssClass:'alert-success',
      timeout:3000
    });
    this.router.navigate(['login']);
    // return false;
  }
}
