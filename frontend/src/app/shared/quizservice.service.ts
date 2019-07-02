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
  },
  {
    "id":"4",
            "question": "Choice Four"
            ,"option1":"option One"
            ,"option2":"option Two"
            ,"option3":"option Three"
            ,"option4":"option Four"
            ,"answer":"Two" 
      },
      {
        "id":"5",
                "question": "Choice Five"
                ,"option1":"option One"
                ,"option2":"option Two"
                ,"option3":"option Three"
                ,"option4":"option Four"
                ,"answer":"Two" 
          } 
]
  constructor() { }

  // getQuiz(){
  //     return this.Quizs;
  // }
  getquestionque(id){
    for(let q of this.Quizs)
    {
      // console.log("getque");
      if(q.id==id)
      {
        // console.log("data is "+q.option1);
        return q;
      }
    }
  }
}
