import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({

      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
     
      'password' : new FormControl(null,[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      'repassword' : new FormControl(null,[Validators.required])
  },
  // {validators: this.passwordConfirming('password','repassword')}
  );
  }
}
