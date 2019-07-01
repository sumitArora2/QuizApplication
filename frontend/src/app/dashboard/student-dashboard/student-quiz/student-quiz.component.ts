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
  quizs:any;

  constructor(private quizgenerate:QuizserviceService) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else { 
        this.timeLeft = 60;
      }
    },1000)


    this.quizs = this.quizgenerate.getQuiz();
  }
}
