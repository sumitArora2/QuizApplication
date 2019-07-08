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
<<<<<<< HEAD
  success1=false;
  constructor(private authservice:AuthServiceService) { }
=======
  constructor(private authservice:AuthServiceService,private flashMessage:FlashMessagesService,private router:Router) { }
>>>>>>> 59c0e9dd0c31d14c48e2caa22dbf12c79e613738

  ngOnInit() {
    this.signinForm = new FormGroup({

      'email' : new FormControl(null, Validators.required),     
      'password' : new FormControl(null,[Validators.required]),
  });
  
  } 
  // fr login
  CheckUserAuth(){ 
    this.authservice.postLogin(this.signinForm.value).subscribe(data=>{
<<<<<<< HEAD
      // console.log(data);
      if(data.success){
        console.log('ifnbjb', data);
      
      }
      else{
        console.log('else run');
=======
      if(data){
        this.router.navigate(['studentHome']);
        this.flashMessage.show('You are now logged in',{cssClass:'alert-success',timeout:3000});
      }else{
        this.router.navigate(['login'])
        this.flashMessage.show('You are not a valid user',{cssClass:'alert-danger',timeout:3000});
>>>>>>> 59c0e9dd0c31d14c48e2caa22dbf12c79e613738
      }
    });
  }

}
