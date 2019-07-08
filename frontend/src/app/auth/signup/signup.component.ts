import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({

      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
     
      'password' : new FormControl(null,[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      'repassword' : new FormControl(null,[Validators.required])
  });
  }
  onRegister(){
    // const user={
    //   username:this.username,
    //   email:this.email,
    //   password:this.password
    // }
    console.log("ghvhvj");
    this.authService.registerUser(this.signupForm.value).subscribe(data=>{
      if(data){
        console.log('uugy',data);
        this.router.navigate(['/login']);
      }else{
        console.log('unsuccessful');
        this.router.navigate(['/signup']);
      }
    }) 
  }
}
