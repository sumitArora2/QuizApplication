import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../shared/services/Authetication/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authService:AuthServiceService,private toastr:ToastrService) { }

  ngOnInit() {
    console.log("this.authService.getUserDetails()",this.authService.getUserDetails());
    this.authService.loadToken();
    console.log("this.authService.loggedIn()",this.authService.loggedIn());
  }
  Logoutclick()
  {
    this.authService.logout();
    this.toastr.success("logged out");
    this.router.navigate(['/login']);
    return false;

  }
}
