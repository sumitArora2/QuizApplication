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
   email=String;
   password:String;
<<<<<<< HEAD
   select_role="Select Role";
  constructor(private authservice:AuthServiceService,private flashMessage:FlashMessagesService,private router:Router) { }

  ngOnInit() {
=======
   user:any
   role:String;
  constructor(private authservice:AuthServiceService,private flashMessage:FlashMessagesService,private router:Router) { }

  ngOnInit() {
    if(this.authservice.loggedIn()){
      this.role=this.authservice.getUserDetails();
    }
    if(this.authservice.loggedIn()){
      this.role=this.authservice.getUserDetails()
      if(this.role==="student"){
        this.router.navigate(['studentHome']);
      }
      else if(this.role==="teacher"){
        this.router.navigate(['teacherHome']);
      }else if(this.role==="principal"){
        this.router.navigate(['princiHome']);
      }else{
        this.router.navigate(['login']);
      }
    }

>>>>>>> e2abb4a8681a1c936d1589ab998543df0cada8a9
    this.signinForm = new FormGroup({
      'email' : new FormControl(null, Validators.required),     
      'password' : new FormControl(null,[Validators.required]),
      'role': new FormControl(null,[Validators.required])
  }); 
  
  }  
  // fr login 
  CheckUserAuth(){  
    this.authservice. AuthLogin(this.signinForm.value).subscribe(data=>{

      if(data.success){ 
        // console.log("succ data ",data);
        // console.log('database ',data['user'].role);
        // console.log('fff', this.signinForm.value.role);
        this.authservice.storeUserData(data.token,data.user);
      if(this.signinForm.value.role ==='student' && data['user'].role ==='student'){
          // console.log("student data ", data);
        this.router.navigate(['studentHome']);
        this.flashMessage.show('Student are now logged in',{cssClass:'alert-success',timeout:3000});
      }
      else if(this.signinForm.value.role ==='principal' && data['user'].role ==='principal'){
        console.log("principal data ", data);
      this.router.navigate(['princiHome']);
      this.flashMessage.show('Principal are now logged in',{cssClass:'alert-success',timeout:3000});
    }
    else if(data['user'].role === 'teacher' && data['user'].role ==='teacher'){
        console.log("teacher data ", data);
      this.router.navigate(['teacherHome']);
      this.flashMessage.show('Teacher are now logged in',{cssClass:'alert-success',timeout:3000});
    }
    else{ 
      // console.log(data);
      this.router.navigate(['login'])
      this.flashMessage.show('You are not a valid user',{cssClass:'alert-danger',timeout:3000});
    } 
  }
      else{ 
        // console.log(data);
        this.router.navigate(['login'])
        this.flashMessage.show('You are not a valid user',{cssClass:'alert-danger',timeout:3000});
      }  
    }); 
  } 

}
