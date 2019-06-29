// import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-quiz',
  templateUrl: './teacher-quiz.component.html',
  styleUrls: ['./teacher-quiz.component.css']
})
export class TeacherQuizComponent implements OnInit {
  newOption=[];
  // myForm:FormBuilder;
  newQuestion=[]
  constructor() { }

  ngOnInit() {
    // this.myForm=this.fb.group({
    //   name:''
    // })
  }
  AddOptions(add:any){
  this.newOption.push(add);
  }
}
