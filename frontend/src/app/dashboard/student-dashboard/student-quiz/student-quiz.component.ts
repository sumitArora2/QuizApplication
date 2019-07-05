import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from 'src/app/shared/quizservice.service';

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.css']
})
export class StudentQuizComponent implements OnInit {
  name = 'Angular 6';
  timeLeft: number = 60;
  interval;
  quiz:any;
 

  constructor(private quizgenerate:QuizserviceService) { }
  nextId:number=1;
  ngOnInit() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else { 
        this.timeLeft = 60;
      }
    },1000)


    // this.quizs = this.quizgenerate.getQuiz();
    this.quiz=this.quizgenerate.getquestionque(1);
  }
  getquestion(id)
  {
    this.quiz=this.quizgenerate.getquestionque(id);
    this.nextId=id;
    if(id>1){
      document.getElementById("prv").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }
    else{
        document.getElementById("prv").style.visibility = "hidden";
    }

  }
  nextque(){
    this.quiz=this.quizgenerate.getquestionque(this.nextId+1);
    this.nextId=this.nextId+1;
    if(this.nextId>1){
      document.getElementById("prv").style.visibility = "visible";
    }
    if(this.nextId == 5){
      document.getElementById("next").style.visibility = "hidden";
    }
  }
  prvque(){
    this.quiz=this.quizgenerate.getquestionque(this.nextId-1);
    this.nextId=this.nextId-1;
    if(this.nextId == 1)
    {
      document.getElementById("prv").style.visibility="hidden";
      document.getElementById("next").style.visibility = "visible";
    }
    else{
      document.getElementById("next").style.visibility = "visible";
    }
  }
}
