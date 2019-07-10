import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  role:any;
  constructor(private authservice:AuthServiceService,private router:Router) { }

  ngOnInit() {
    if(this.authservice.loggedIn()){
      this.role=this.authservice.getUserDetails()
      if(this.role==="student"){
        this.router.navigate(['studentHome']);
      }
      else if(this.role==="teacher"){
        this.router.navigate(['teacherHome']);
      }else if(this.role==="principal"){
        this.router.navigate(['teacherHome']);
      }else{
        this.router.navigate(['login']);
      }
    }
  }

}
