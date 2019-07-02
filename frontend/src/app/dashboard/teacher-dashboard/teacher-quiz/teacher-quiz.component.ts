import { QuestionsService } from './../../../shared/services/questions.service';
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
  
  constructor(private QuesService:QuestionsService) { }
  newQuestion
  ngOnInit() {
    // this.myForm=this.fb.group({
    //   name:''
    // })
   // this.newQuestion=this.QuesService.getQuestions();
    console.log("in quizzz",this.QuesService.getQuestions());
  }
  AddOptions(add:any){
  // this.newOption.push(add);
  

  }
  AddAnotherPannel(add:any){
  this.QuesService.addQuestions();  
  // this.newQuestion=this.QuesService.getQuestions();
}

  removeQuestion(i){
    // console.log("the value of i is",i);
    // console.log("the value of index is",i.value);
    
  //  this.newQuestion.splice(i,1)
  }
}
