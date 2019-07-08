import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup; 
  // email=document.getElementById("email");
  // password:String;
  constructor(private authservice:AuthServiceService,private flashMessage:FlashMessagesService,private router:Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({

      'email' : new FormControl(null, Validators.required),     
      'password' : new FormControl(null,[Validators.required]),
  });
  
  }  
  // fr login 
  CheckUserAuth(){ 
    this.authservice.postLogin(this.signinForm.value).subscribe(data=>{
      if(data.success==true){ 
        if(data['user'].role=='student'){
        this.router.navigate(['studentHome']);
        this.flashMessage.show('You are now logged in',{cssClass:'alert-success',timeout:3000});
      }
    }
    if(data.success==true){ 
      if(data['user'].role=='principal'){
      this.router.navigate(['principalHome']);
      this.flashMessage.show('You are now logged in',{cssClass:'alert-success',timeout:3000});
    }
  }
    if(data.success==true){ 
      if(data['user'].role=='teacher'){
      this.router.navigate(['teacherHome']);
      this.flashMessage.show('You are now logged in',{cssClass:'alert-success',timeout:3000});
    }
  }
      else{ 
        console.log(data);
        this.router.navigate(['login'])
        this.flashMessage.show('You are not a valid user',{cssClass:'alert-danger',timeout:3000});
      }  
    }); 
  } 

}
