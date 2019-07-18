import { Ques } from '../../../models/Ques';
import { QuestionsService } from '../../../shared/services/QuestionsService/questions.service';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-quiz',
  templateUrl: './teacher-quiz.component.html',
  styleUrls: ['./teacher-quiz.component.css']
})
export class TeacherQuizComponent implements OnInit {
  newOption = [];
  question: Ques;
  nestedForm: FormGroup;
  Queslength: number
  Optslength: number
  abc:boolean;
  class:any
  classes=[];
  subjects=[];
  chapterId:any;
  // makeQuizForm: FormGroup;
  constructor(public QuesService: QuestionsService, private fb: FormBuilder) {
  }
 
  async ngOnInit() {
    this.Queslength = 1;
    this.Optslength = 1;
    this.nestedForm = this.fb.group({
      Questions: this.fb.array([this.Questions]),
      'class' : new FormControl(null, [Validators.required]),
      'subject' : new FormControl(null,[Validators.required]), 
      'chapter' : new FormControl(null,[Validators.required])
    });
    let response=await this.QuesService.getClass();
    this.classes=response['res'] 
  }

  async classChange(data){
  let response=await this.QuesService.getSpecificClass(data);
  this.subjects= response['res'].Subjects;
  }
  // send(formdata){
  // console.log("formdata",formdata)
  // }
  async startQuizMakebtn(data){
    console.log(data);
    let chapterData=await this.QuesService.AddChapter(data);
    // console.log("chapterData",chapterData);
    this.chapterId=chapterData['res']._id;
    document.getElementById("onbuttonVisible").style.visibility="visible";
    document.getElementById("startMakeQuiz").style.visibility="hidden";
    // document.getElementsByClassName("droup-down").disabled;
    this.abc=true;
  }

  get QuestionControl() {
    return <FormArray>this.nestedForm.get('Questions');
  }
  getOptionControl(question:any) {
    return <FormArray>question.get('Options')
  }
  get Questions(): FormGroup {
    return this.fb.group({
      // quesId: this.Queslength,
      question_name: "",
      Options: this.fb.array([this.Options])
    })
  }

  get Options(): FormGroup {
    return this.fb.group({
      // optsId: this.Optslength,
      option_name: "",
      IsAnswer: ""
    })
  }
  AddOptions(question) {
    this.Optslength++;
    question.get("Options").push(this.Options)
  }
  AddQuestions() {
    this.Queslength++;
    (this.nestedForm.get("Questions") as FormArray).push(this.Questions);

  }

  removeQuestions(QuesIdx) {
    console.log((this.nestedForm.get("Questions") as FormArray).removeAt(QuesIdx));
  }
  removeOptions(question, id) {
    console.log(question.get("Options").removeAt(id));
  }
  sendOptsId(QuesIdx, OptIdx) {
    const question = (this.nestedForm.get("Questions") as FormArray).value;
    question[QuesIdx].Options.map(option => option.IsAnswer = false);
    question[QuesIdx].Options[OptIdx].IsAnswer = true;
    // console.log((this.nestedForm.get("Questions") as FormArray).value)
  }
  submitForm(data) {
    // console.log(data);
    // console.log("data.Questions",data.Questions);
    // console.log("data.Questions.length",data.Questions.length);
    // console.log("data.Questions[0]",data.Questions[0]);
    let QuestionsLength=data.Questions.length;
    let question=data.Questions;
    // this.chapterId="abcsss"
    for(let i=0;i<QuestionsLength;i++){
      console.log("questions",question);
      this.QuesService.AddQuestion(this.chapterId,question[i]);
    }
  }
}


