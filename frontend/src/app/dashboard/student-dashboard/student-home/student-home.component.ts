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

  constructor(private router:Router,private authService:AuthServiceService,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
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
