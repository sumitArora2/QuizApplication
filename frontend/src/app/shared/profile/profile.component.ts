import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../services/ProfileService/profile-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  userProfileForm: FormGroup;
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
      'phone' : new FormControl(null, [Validators.required,Validators.maxLength(10)]),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      
      // 'password' : new FormControl(null,[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      // 'repassword' : new FormControl(null,[Validators.required]),
      // 'role': new FormControl(null,[Validators.required])

  });
  }
  SubmitProfile(){
    console.log(this.userProfileForm.value)
    this.profileService.completeProfile(this.userProfileForm.value).subscribe(data=>{
      if(data.success){
        console.log(data);
        this.flashMessage.show('Data added successfully', { cssClass: 'alert-success', timeout: 3000 });
      }else{
        this.flashMessage.show('something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      } 
    }) 
  }
}
