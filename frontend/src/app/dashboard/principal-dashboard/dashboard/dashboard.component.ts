import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from 'src/app/shared/services/ProfileService/profile-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private profileService:ProfileServiceService) { }


  ngOnInit() {
  }

async sendDetails(data){
  // console.log("data is here",data);
  // let response=await this.profileService.getDetails(data);
  this.profileService.setrole(data);
}
}
