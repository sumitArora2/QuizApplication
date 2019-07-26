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
    this._location.back();
  }
}
