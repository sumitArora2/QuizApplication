import { Ques } from './../../../classes/Ques';
import { QuestionsService } from './../../../shared/services/questions.service';
import { FormGroup, FormBuilder, FormArray,  } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teacher-quiz',
  templateUrl: './teacher-quiz.component.html',
  styleUrls: ['./teacher-quiz.component.css']
})
export class TeacherQuizComponent implements OnInit {
  newOption = [];
  // myForm:FormBuilder;
  
  question: Ques;
  sampleString: string = "";
  nestedForm: FormGroup;
  Queslength:number
  Optslength:number
  constructor(public QuesService: QuestionsService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.Queslength=1;
    this.Optslength=1;
    this.nestedForm = this.fb.group({
      Questions: this.fb.array([this.Questions]),
    });
  }

  get Questions():FormGroup{
    // console.log("done for first time in india");
    return this.fb.group({
      quesId:this.Queslength,
      question_name:"",
      Options:this.fb.array([this.Options])
    })

  }

  get Options():FormGroup{
    // console.log("done for second time in india");
    return this.fb.group({
      optsId:this.Optslength,
      option_name:"",
      IsAnswer:false
    })
  }
  AddOptions(question){
    this.Optslength++;
    question.get("Options").push(this.Options)
  }
  AddQuestions(){
    this.Queslength++;
    (this.nestedForm.get("Questions") as FormArray).push(this.Questions)
    // console.log((this.nestedForm.get("Questions") as FormArray).length);
    console.log((this.nestedForm.get("Questions") as FormArray).value);
  }
  removeQuestions(QuesIdx){
    console.log((this.nestedForm.get("Questions") as FormArray).removeAt(QuesIdx));
  }
  removeOptions(question,id){
  // console.log( question.get("Options").at(id).value);
  console.log(question.get("Options").removeAt(id));
  }

  submitForm(data) {
    console.log(data);

  }
}


