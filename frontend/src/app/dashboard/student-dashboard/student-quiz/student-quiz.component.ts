import { QuestionsService } from './../../../shared/services/QuestionsService/questions.service';
import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from 'src/app/shared/services/QuizService/quizservice.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.css']
})
export class StudentQuizComponent implements OnInit {
  name = 'Angular 6';
  timeLeft: number = 59;
  interval;
  quize: {};
  showidx = 0;
  // quiz:any; 
  takeQuizForm: FormGroup;
  constructor(private quizgenerate: QuizserviceService, private questionService: QuestionsService) { }
  nextId: number;
  classes = [];
  questions_list=[];
  active_question=1;
  
  async ngOnInit() {
    this.takeQuizForm = new FormGroup({
      'course': new FormControl(null, [Validators.required])
    })

    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
    this.nextId = this.showidx + 1;
    let getQuestions = await this.questionService.getQuestions();
    this.questions_list = getQuestions['result'];
    console.log("this.questionService.getQuestions()", this.questions_list);
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
  sendvalue(value){
    console.log("value",value);
  }

  selectOption(questionIndex,optionIndex,isAnswer){
    this.questions_list[questionIndex]['isSelected'] = optionIndex;
    if(isAnswer=='true')
      this.questions_list[questionIndex]['marks']=1;
    else{
      this.questions_list[questionIndex]['marks']=-0.25;
    }
  }
  clearOption(question){
    try{
      this.questions_list[question]['isSelected']=null;
      this.questions_list[question]['marks']=0
    }
    catch(err){
      ;
    }
  }
  changeQuestion(questionIndex){
    this.active_question=questionIndex+1;
  }

  onSubmit(){
    let marks =0;
    for(let i=0;i<this.questions_list.length;i++){
      if(this.questions_list[i]['marks']!=undefined)
       marks += this.questions_list[i]['marks'];
    }
    console.log(marks);
  }
}
