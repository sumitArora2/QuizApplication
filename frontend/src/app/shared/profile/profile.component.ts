import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../services/ProfileService/profile-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  userProfileForm: FormGroup;
  passwordForm: FormGroup;
  submitted=false;
  constructor(private profileService:ProfileServiceService,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    // this.profileService.getProfile().subscribe(profile=>{
    //   this.user=profile
    // }, 
    // err=>{
    //   console.log(err);
    //   return false;
    // });

    this.userProfileForm = new FormGroup({

      'firstname' : new FormControl(null, [Validators.required,Validators.maxLength(25)]),
      'lastname' : new FormControl(null, [Validators.required,Validators.maxLength(20)]),
      'phone' : new FormControl(null, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'fmname' : new FormControl(null,[Validators.required]),
      'fphone' : new FormControl(null,[Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      'location' : new FormControl(null,[Validators.required]),
  });
  this.passwordForm = new FormGroup({
     'password' : new FormControl(null,[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
     'repassword' : new FormControl(null,[Validators.required])
  }); 
  // this.userProfileForm= this.formBuilder.group({
  //   'firstname': ['', Validators.required],
  //   'lastname' : ['', Validators.required,Validators.maxLength(20)],
  //   'phone' : ['', Validators.required,Validators.maxLength(10)],
  //   'email' : ['',Validators.required,Validators.email],
  //   'fmname' : ['',Validators.required],
  //   'fphone' : ['',Validators.required],
  //   'location' : ['',Validators.required],
  // })
  }

  get f() { return this.userProfileForm.controls; }
  SubmitProfile(){ 
    this.submitted=true;
    // stop here if form is invalid
    if (this.userProfileForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userProfileForm.value, null, 4));
    // console.log(this.userProfileForm.value)
    // this.profileService.completeProfile(this.userProfileForm.value).subscribe(data=>{
    //   if(data.success){
    //     console.log(data);
    //     this.flashMessage.show('Data added successfully', { cssClass: 'alert-success', timeout: 3000 });
    //   }else{
    //     this.flashMessage.show('something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
    //   } 
    // }) 
  } 

  // OnProfilebtn(){
  //   if(this.userProfileForm.valid){
  //     this.flashMessage.show('Data added successfully', { cssClass: 'alert-success', timeout: 3000 }); 
  //   }else{
  //     this.flashMessage.show('Fill All required Fields', { cssClass: 'alert-danger', timeout: 3000 });
  //   } 
  // }
}
