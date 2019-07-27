import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from 'src/app/shared/services/ProfileService/profile-service.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html', 
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {  
  details:any;
  checkRole: String;

  filterText:any;
  constructor(private profileService:ProfileServiceService,private router:Router,private _location: Location) { }
 
  async ngOnInit() {
    let response=await this.profileService.getDetails(); 
    this.details=response['res'];
    console.log(this.details[0].role);
    if(this.details[0].role === "teacher")
      this.checkRole="Teacher";
    else{
      this.checkRole="Student";
    }
    console.log("this.details",this.details);
  }
  addstudent(){
   console.log("data is here",this.filterText);
  //  this.details.push({username:this.filterText,email:"sumit@gmail.com"});
   this.filterText='';
  }
  goBack(){ 
    // let user=JSON.parse(localStorage.getItem('user'));
    // console.log("user role show  ", user.role);
    // if(user.role==="principal"){
    //   this.router.navigate(['princiHome']); 
    // }
    // if(user.role==="teacher"){
    //   this.router.navigate(['teacherHome']);
    // } 
    console.log("go back works");
    this._location.back();
  }
}
