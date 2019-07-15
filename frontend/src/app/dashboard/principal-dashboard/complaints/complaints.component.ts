import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  complaintForm:FormGroup;

  constructor(private authService:AuthServiceService,private router:Router,private flashService:FlashMessagesService) { }

  ngOnInit() {
    this.complaintForm = new FormGroup({

      'firstname' : new FormControl(null, [Validators.required,Validators.maxLength(25)]),
      'lastname': new FormControl(null,[Validators.required,Validators.maxLength(25)]),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'message' : new FormControl(null,[Validators.required,Validators.maxLength(50)])
  });

}
}
