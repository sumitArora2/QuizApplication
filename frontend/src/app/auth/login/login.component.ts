import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup; 
   email=String;
   password:String;
   user:any
   role:String;
  constructor(private authservice:AuthServiceService,private router:Router,private toastr:ToastrService) { }

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
        this.toastr.success(' student are succesfully logged in');
      }
      else if(this.signinForm.value.role ==='principal' && data['user'].role ==='principal'){
        console.log("principal data ", data);
      this.router.navigate(['princiHome']);
      this.toastr.success(' principal are succesfully logged  in');
    }
    else if(data['user'].role === 'teacher' && data['user'].role ==='teacher'){
        console.log("teacher data ", data);
      this.router.navigate(['teacherHome']);
      this.toastr.success(' teacher are succesfully logged  in');
    }
    else{ 
      // console.log(data);
      this.router.navigate(['login'])
      this.toastr.error(' you are not logged in');
    } 
  }
      else{ 
        // console.log(data);
        this.router.navigate(['login'])
        this.toastr.error(' you are not logged in');
      }  
    });
  } 

}
