import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
}) 
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  role:any;
  classes=[];
  constructor(private authService:AuthServiceService,private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.role=this.authService.getUserDetails()
      if(this.role==="student"){
        this.router.navigate(['studentHome']);
      }
      else if(this.role==="teacher"){
        this.router.navigate(['teacherHome']);
      }else if(this.role==="principal"){
        this.router.navigate(['teacherHome']);
      }else{
        this.router.navigate(['login']);
      }
    }
    this.signupForm = new FormGroup({

      'username' : new FormControl(null, [Validators.required,Validators.maxLength(25)]),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
     
      'password' : new FormControl(null,[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      'repassword' : new FormControl(null,[Validators.required]),
      'role': new FormControl(null,[Validators.required])

  },
  {validators: this.passwordConfirming('password','repassword')}
  );

  // get student class 
  this.authService.getClass().subscribe(data=>{
    console.log("!!!!!!!!!!!");
    if(data){
      console.log("class data ",data);
      console.log("class name  ",data.res[0].class_name);
      this.classes=data.res;
    }
    else{
      console.log("lese run");
    }
  });

  // if(document.getElementById("studentOption"))
  // {
  //   document.getElementById("classDropDown").style.visibility="visible"
  // }
  }
  //Confirm Password
  passwordConfirming(password: string, repassword: string){
    return(group: FormGroup):{[key: string]: any}=>{
      let pass= group.controls[password];
      let cnfpass= group.controls[repassword];
      if(pass.value !== cnfpass.value){
        return{
         passwordConfirming: true
        };
      }
      return null;
    }
 }
  //on signup 
  onRegister(){
    console.log(this.signupForm.value)
    this.authService.registerUser(this.signupForm.value).subscribe(data=>{
      if(data.success){
        console.log(data);
        this.flashMessage.show('you are now registered and Kindly login', { cssClass: 'alert-success', timeout: 3000 });
         this.router.navigate(['login']);
      }else{
        this.flashMessage.show('something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['signup']);
      } 
    }) 
  }

  roleOnChange(changedata){ 
    console.log(changedata);
    // if(document.getElementById("roleDroupDown").value ==="student")
        // document.getElementById("classDropDown").style.visibility="visible"
    
  }
}
