import { AuthServiceService } from './../../../shared/services/Authetication/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileServiceService } from 'src/app/shared/services/ProfileService/profile-service.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {
  role:any
  constructor(private authService:AuthServiceService,
    private router:Router,private toastr:ToastrService,private profileService:ProfileServiceService) { }

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
    this.toastr.success('you are logged out');
    this.router.navigate(['login']);
    // return false;
  }
  async sendDetails(data){
    // console.log("data is here",data);
    // let response=await this.profileService.getDetails(data);
    this.profileService.setrole(data);
  }
}
