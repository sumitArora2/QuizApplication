import { QuestionsService } from './../../../shared/services/QuestionsService/questions.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizserviceService } from 'src/app/shared/services/QuizService/quizservice.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.css']
})
export class StudentQuizComponent implements OnInit {

  name = 'Angular 6';
  timeLeft: number = 300;
  interval;
  quize: {};
  showidx = 0;
  // quiz:any; 
  takeQuizForm: FormGroup;
  TotalAnswered = 0;
  RightAnswer = 0;
  NotAttempted: Boolean;
  @ViewChild('submitModal',{ static: true }) submitModal: ModalDirective;
  @ViewChild('answerModal',{ static: true }) answerModal: ModalDirective;
  @ViewChild('timeoutModal',{ static: true }) timeoutModal: ModalDirective;
  constructor(private quizgenerate: QuizserviceService, private questionService: QuestionsService,private router:Router) { }
  nextId: number;
  classes = [];
  questions_list = [];
  active_question = 1;
  ShowAnswer=[];
  async ngOnInit() {
    this.NotAttempted = true;
    this.takeQuizForm = new FormGroup({
      'course': new FormControl(null, [Validators.required])
    })

    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }else{
       this.timeoutModal.show()
      } 
    }, 1000);
    // this.interval = setTimeout(() => {
    //   if (this.timeLeft < 0) {
        
    //   }
    // }, 1000);
    this.nextId = this.showidx + 1;
    let getQuestions = await this.questionService.getQuestions();
    this.questions_list = getQuestions['result'];
  }
  startQuizbtn() {
    if (!this.takeQuizForm.valid) {
      alert("First select Subject and Chapter");
    }
    else {
      document.getElementById("onbuttonVisible").style.visibility = "visible";
      document.getElementById("desBeforeQuiz").style.visibility = "hidden";
    }
  }

  selectOption(questionIndex, optionIndex, isAnswer) {
    this.questions_list[questionIndex]['isSelected'] = optionIndex;
    if (isAnswer == 'true')
      this.questions_list[questionIndex]['marks'] = 1;
    else {
      this.questions_list[questionIndex]['marks'] = -0.25;
    }
  }
  clearOption(question) {
    try {
      this.questions_list[question]['isSelected'] = null;
      this.questions_list[question]['marks'] = 0
    }
    catch (err) {
      ;
    }
  }
  changeQuestion(questionIndex) {
    this.active_question = questionIndex + 1;
  }

  onSubmit() {
    let marks = 0;
    for (let i = 0; i < this.questions_list.length; i++) {
      if(this.questions_list[i]['isSelected']!=null){
        this.TotalAnswered+=1;
      }
      if (this.questions_list[i]['marks'] != undefined) {
        marks += this.questions_list[i]['marks']; 
        this.NotAttempted = false;
      }
      if(this.questions_list[i]['marks']==1){
      
        this.RightAnswer+=1;
      }
    }
    // console.log(marks);
    if (this.NotAttempted) {
      this.TotalAnswered = 0;
      this.RightAnswer = 0;
    }
    this.submitModal.show();
  }
  closeModal(){
     this.submitModal.hide();
     setTimeout(() => {
      this.TotalAnswered=0;
      this.RightAnswer=0;
    }, 1000);
  }
  checkAnswers(){
    this.submitModal.hide();
    for (let i = 0; i < this.questions_list.length; i++) {
      if(this.questions_list[i]['isSelected'] != undefined && this.questions_list[i]['isSelected'] != null){
        this.ShowAnswer.push(this.questions_list[i]);
      }
    }
    this.answerModal.show();
  }
  closeAnswerModal(){
    clearInterval(this.interval); 
    this.router.navigate(['/home']);
    this.answerModal.hide();
    this.submitModal.hide();
    this.ShowAnswer=[];
    setTimeout(() => {
      this.TotalAnswered=0;
      this.RightAnswer=0;
    }, 1000);
  }
  timeUp(){
    clearInterval(this.interval); 
    this.timeoutModal.hide();
    this.submitModal.hide();
    this.answerModal.hide();
    this.router.navigate(['/home']);
  }
}
