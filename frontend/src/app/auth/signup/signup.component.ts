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
  constructor(private authService:AuthServiceService,private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({

      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
     
      'password' : new FormControl(null,[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      'repassword' : new FormControl(null,[Validators.required])
  });
  }
  //on signup
  onRegister(){
    this.authService.registerUser(this.signupForm.value).subscribe(data=>{
      if(data){
        this.flashMessage.show('you are now registered and login', { cssClass: 'alert-success', timeout: 3000 });
        console.log('uugy',data);
        this.router.navigate(['login']);
      }else{
        this.flashMessage.show('something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['signup']);
      }
    })
  }
}
