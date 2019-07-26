import { Ques } from '../../../models/Ques';
import { QuestionsService } from '../../../shared/services/QuestionsService/questions.service';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { Router } from '@angular/router';

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
  chapters=[];
  chapterId:any;
  chaptersExist:boolean;
  newChapter:boolean;
  role:any;
  ExistingId:any;
  // makeQuizForm: FormGroup;
  constructor(public QuesService: QuestionsService, 
    private fb: FormBuilder,
    private authService : AuthServiceService,private router:Router) {
  }
 
  async ngOnInit() {
    if(this.authService.loggedIn()){
      this.role=this.authService.getUserDetails()
      if(this.role==="student"){
        this.router.navigate(['studentHome']);
      }
      else if(this.role==="teacher"){
        this.router.navigate(['teacherQuiz']);
      }else if(this.role==="principal"){
        this.router.navigate(['princiHome']);
      }else{
        this.router.navigate(['login']);
      }
    }
    this.Queslength = 1;
    this.Optslength = 1;
    this.nestedForm = this.fb.group({
      Questions: this.fb.array([this.Questions]),
      'class' : new FormControl("", [Validators.required]),
      'subject' : new FormControl("",[Validators.required]), 
      'chapter' : new FormControl("",[Validators.required])
    });
    let response=await this.QuesService.getClass();
    this.classes=response['res'] 
   this.chaptersExist=false;
   this.newChapter=false;
  }
 
  async classChange(data){
    this.subjects=[];
    this.chaptersExist=false;
  let response=await this.QuesService.getSpecificClass(data);
  this.subjects= response['res'].Subjects;
   
}
  async subjectChange(data){
    console.log("in subject changes");
    await this.QuesService.sendSubjectId(data);
   let response=await this.QuesService.getchptrSubjct();
   console.log("subject is ",data);
   this.chapters=response['res'];
   if(this.chapters.length>0){ 
    this.chaptersExist=true;
   }else{
     this.chaptersExist=false;
   }
  }
  //get subject id
  async getChapterId(data){
    await this.QuesService.sendChapterBYId(data);
    console.log(data);
    this.ExistingId=data;
    console.log("ExistingId is  ",this.ExistingId);
  }

 async startQuizMakebtn(data){
    console.log(data);
    if(this.chaptersExist==false){
    let chapterData=await this.QuesService.AddChapter(data);
    // console.log("chapterData",chapterData);
    this.chapterId=chapterData['res']._id;
    }
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
  addMoreQuestion(){
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
  }
  submitForm(data) { 
         
    if(this.chaptersExist==true){  
      console.log("if works");
      let QuestionsLength=data.Questions.length; 
      let question=data.Questions;
      for(let i=0;i<QuestionsLength;i++){
        console.log("questions",question);
          this.QuesService.addMoreQuestion(this.ExistingId,question[i]);
          console.log("end if..........");
    }  
  }  
  else{
    console.log("else works");
    let QuestionsLength=data.Questions.length;
    let question=data.Questions;
    for(let i=0;i<QuestionsLength;i++){
      console.log("questions",question);
      this.QuesService.AddQuestion(this.chapterId,question[i]);
  }
  }
}
  AddNewChapter(){
    console.log("in add new chapter");
    this.chaptersExist=false;
    this.newChapter=true;
    this.nestedForm.patchValue({
      'chapter':''
    })
    // this.nestedForm = this.fb.group({
    //   'chapter' : new FormControl(null,[Validators.required])
    // });
  }
  CancelAddChapter(){
    this.chaptersExist=true;
    this.newChapter=false;
  }
}


