import { Ques } from './../../../classes/Ques';
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
  
  constructor(public QuesService:QuestionsService) { }
  question:Ques;
  sampleString:string="";
  ngOnInit() {
  }
  AddOptions(add:any){
  // this.newOption.push(add);
  

  }
  AddAnotherPannel(add:any){
  this.QuesService.addQuestions(this.sampleString);  
}
  removeQuestion(newQues){
    console.log("ssss",newQues.id);
   this.QuesService.removeQuestions(newQues.id);
  }
}
