import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {
  Quizs=[
    {
    "id":"1",
            "question": "Choice One"
            ,"option1":"option One"
            ,"option2":"option Two"
            ,"option3":"option Three"
            ,"option4":"option Four"
            ,"answer":"Two"
    },
{   "id":"2",
            "question": "Choice Two"
            ,"option1":"option One"
            ,"option2":"option Two"
            ,"option3":"option Three"
            ,"option4":"option Four"
            ,"answer":"Two"
      
},
{
"id":"3",
        "question": "Choice Three"
        ,"option1":"option One"
        ,"option2":"option Two"
        ,"option3":"option Three"
        ,"option4":"option Four"
        ,"answer":"Two" 
  } 
]
  constructor() { }

  getQuiz(){
      return this.Quizs;
  }
}
