import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/Authetication/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;

  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile=>{
      this.user=profile
    },
    err=>{
      console.log(err);
      return false;
    });
  }


}
