import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from 'src/app/shared/services/ProfileService/profile-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details:any;
  filterText:any;
  constructor(private profileService:ProfileServiceService,private router:Router) { }

  async ngOnInit() {
    let response=await this.profileService.getDetails(); 
    this.details=response['res'];
    console.log("this.details",this.details);
  }
  addstudent(){
   console.log("data is here",this.filterText);
   this.details.push({username:this.filterText,email:"sumit@gmail.com"});
   this.filterText='';
  }

}
