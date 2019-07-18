import { QuestionsService } from './../../../shared/services/QuestionsService/questions.service';
import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from 'src/app/shared/services/QuizService/quizservice.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.css']
}) 
export class StudentQuizComponent implements OnInit {
  name = 'Angular 6';
  timeLeft: number = 60;
  interval;
  quizes:{};
  showidx=0;
  quiz:any; 
  takeQuizForm: FormGroup; 
  constructor(private quizgenerate:QuizserviceService,private questionService:QuestionsService) { }
  nextId:number;
  classes=[];
  ngOnInit() {
    this.takeQuizForm = new FormGroup({

      'course':new FormControl(null, [Validators.required])
  })

// get classes and Subject
this.quizgenerate.getClass().subscribe(data=>{
  console.log("!!!!!!!!!!!");
  if(data){
    console.log("class data ",data);
    console.log("class name  ",data.res[0].class_name);
    this.classes=data.res;
  }
  else{
    console.log("lese run");
  }
});

    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else { 
        this.timeLeft = 60;
      }
    },1000);
    // this.questionService.getQuestions().subscribe(data=>{
    //   this.quizes=data;
    //  console.log(this.quizes);
    // });
    this.nextId=this.showidx+1;
    // this.quizs = this.quizgenerate.getQuiz();
    // this.quiz=this.quizgenerate.getquestionque(1);
  }
  startQuizbtn(){
    if(!this.takeQuizForm.valid){
      alert("First select Subject and Chapter");
    }
    else{
    document.getElementById("onbuttonVisible").style.visibility="visible";
    document.getElementById("desBeforeQuiz").style.visibility="hidden";
    }
  }
  getquestion(id)
  {
    this.showidx=id-1;
    this.questionService.getQuestions().subscribe(data=>{
      this.quizes=data;
     console.log(this.quizes);
    });
    // this.quiz=this.quizgenerate.getquestionque(id);
    // this.nextId=id;
    // if(id>1){
    //   document.getElementById("prv").style.visibility = "visible";
    //   document.getElementById("next").style.visibility = "visible";
    // }
    // else{
    //     document.getElementById("prv").style.visibility = "hidden";
    // }
  }
 
  nextque(){
    // this.quiz=this.quizgenerate.getquestionque(this.nextId+1);
    // this.nextId=this.nextId+1;
    this.showidx=this.showidx+1;
    this.questionService.getQuestions().subscribe(data=>{
      this.quizes=data;
    });
    this.nextId=this.showidx+1;
    console.log("this.nextId",this.nextId);
    if(this.nextId>1){
      document.getElementById("prv").style.visibility = "visible";
    }
    if(this.nextId == 5){
      document.getElementById("next").style.visibility = "hidden";
    }
  }
  prvque(){
    this.showidx=this.showidx-1;
    this.questionService.getQuestions().subscribe(data=>{
      this.quizes=data;
    });
    this.nextId=this.showidx-1;
    if(this.nextId==1){
      document.getElementById("prv").style.visibility = "hidden";
    }
  }
}
