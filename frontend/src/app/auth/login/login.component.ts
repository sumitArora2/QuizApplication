import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup; 
  // email=document.getElementById("email");
  // password:String;
  constructor(private authservice:AuthServiceService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({

      'email' : new FormControl(null, Validators.required),     
      'password' : new FormControl(null,[Validators.required]),
  });
  
  } 
  CheckUserAuth(){ 
    // const userauth={
      // email:this.email,
      // password: this.
    // }
    this.authservice.postLogin(this.signinForm.value).subscribe(data=>{
      console.log(data);
    });
  }

}
