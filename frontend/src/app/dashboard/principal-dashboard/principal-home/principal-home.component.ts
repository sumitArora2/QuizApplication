import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';

@Component({
  selector: 'app-principal-home',
  templateUrl: './principal-home.component.html',
  styleUrls: ['./principal-home.component.css']
})
export class PrincipalHomeComponent implements OnInit {

  constructor(private authService:AuthServiceService,private router:Router,private flashMesssage:FlashMessagesService) { }

  ngOnInit() {
  }
  Logoutclick()
  {
    this.authService.logout();
    this.flashMesssage.show('you are logged out', {
      cssClass:'alert-success',
      timeout:3000
    });
    this.router.navigate(['/login']);
    return false;

  }

}
