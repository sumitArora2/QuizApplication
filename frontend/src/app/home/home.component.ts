import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../shared/services/Authetication/auth-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authService:AuthServiceService,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    console.log("this.authService.getUserDetails()",this.authService.getUserDetails());
    this.authService.loadToken();
  }
  Logoutclick()
  {
    this.authService.logout();
    this.flashMessage.show('you are logged out', {
      cssClass:'alert-success',
      timeout:3000
    });
    this.router.navigate(['/login']);
    return false;

  }
}
