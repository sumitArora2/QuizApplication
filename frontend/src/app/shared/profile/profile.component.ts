import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../services/ProfileService/profile-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  passwordForm: FormGroup;
  submitted=false;
  constructor(private profileService:ProfileServiceService,private flashMessage:FlashMessagesService, public http: HttpClient, private router:Router,private _location: Location) { }

  ngOnInit() {
    this.userProfileForm = new FormGroup({

      'username' : new FormControl(null, [Validators.required,Validators.maxLength(25)]),
      'phone' : new FormControl(null, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'faterMotherName' : new FormControl(null,[Validators.required]),
      'fmphone' : new FormControl(null,[Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      'location' : new FormControl(null,[Validators.required]),
      'address': new FormControl(null),
      'lastname': new FormControl(null)
  });
  this.passwordForm = new FormGroup({
    //  'oldpassword' : new FormControl(null,[Validators.required]),
     'password' : new FormControl(null,[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
     'repassword' : new FormControl(null,[Validators.required])
  },  {validators: this.passwordConfirming('password','repassword')});
  
  // get profile data
  let user=JSON.parse(localStorage.getItem('user'));
  // console.log("user id is: ",user.id);

 this.profileService.getUserProfile(user.id).subscribe(data=>{
   if(data.success){ 
    // console.log("data:  ",data);
    // console.log("data",data.data[0].email);

    // set signup data into textbox
        this.userProfileForm.patchValue({   
          'username':data.data[0].username,
          'phone':data.data[0].phone,
          'email': data.data[0].email,
          'faterMotherName':data.data[0].faterMotherName,
          'fmphone':data.data[0].fmphone,
          'location':data.data[0].location,
          'lastname':data.data[0].lastname,
          'address':data.data[0].address 
        });
   }
   else{
     console.log("nnnnnnn");
   }
  });  

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
  get f() { return this.userProfileForm.controls; }
  get p() { return this.passwordForm.controls; }
  
  SubmitProfileForm(){ 
    this.submitted=true;
  
    if (this.userProfileForm.invalid) {
      return;
  }
  else{
    let user=JSON.parse(localStorage.getItem('user'));
    this.profileService.updateUserProfile(this.userProfileForm.value,user.id).subscribe(data=>{
      console.log("vjhbjbj");
      if(data.success){ 
        console.log("updated data is: ",data);
          this.flashMessage.show('Data is submitted successfully', { cssClass: 'alert-success', timeout: 3000 });
        }else{
          console.log("not send");
          this.flashMessage.show('Data not submited', { cssClass: 'alert-danger', timeout: 3000 });
        } 
    });
  }
  } 
 passwordSubmitForm(){
  this.submitted=true;
      // stop here if form is invalid
      if(this.passwordConfirming){
        alert("Password and Re-Type password must match");
      }
  if (this.passwordForm.invalid) {
    return;
}
else{
  let user=JSON.parse(localStorage.getItem('user'));
  this.profileService.updateUserProfile(this.passwordForm.value,user.id).subscribe(data=>{
    console.log("vjhbjbj");
    if(data.success){ 
      console.log("updated data is: ",data);
        this.flashMessage.show('Password is changed successfully', { cssClass: 'alert-success', timeout: 3000 });
      }else{
        console.log("not send");
        this.flashMessage.show('Password not changed', { cssClass: 'alert-danger', timeout: 3000 });
      } 
  });
}
}

// ProfileSubmitbtnOnClick(){
//   let user=JSON.parse(localStorage.getItem('user'));
//   this.profileService.updateUserProfile(this.userProfileForm.value,user.id).subscribe(data=>{
//     console.log("vjhbjbj");
//     if(data.success){ 
//       console.log(data);
//         this.flashMessage.show('Data is submitted successfully', { cssClass: 'alert-success', timeout: 3000 });
//       }else{
//         console.log("not send");
//         this.flashMessage.show('Data not submited', { cssClass: 'alert-danger', timeout: 3000 });
//       } 
//   }); 

// }
goBack(){ 
  // let user=JSON.parse(localStorage.getItem('user'));
  // console.log("user role show  ", user.role);
  // if(user.role==="principal"){
  //   this.router.navigate(['princiHome']); 
  // }
  // if(user.role==="teacher"){
  //   this.router.navigate(['teacherHome']);
  // } 
  // if(user.role==="student"){
  //   this.router.navigate(['studentHome']);
  // } 
  this._location.back();
}
}
