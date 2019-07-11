import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  role:any;
  constructor(private authservice:AuthServiceService,private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    if(this.authservice.loggedIn()){
      this.role=this.authservice.getUserDetails()
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
    this.authservice.logout();
    this.flashMessage.show('you are logged out', {
      cssClass:'alert-success',
      timeout:3000
    });
    this.router.navigate(['/login']);
    return false;

  }
}
