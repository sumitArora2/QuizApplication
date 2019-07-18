import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
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
constructor(private http:HttpClient) { }

  // getQuiz(){
  //     return this.Quizs;
  // }
  getquestionque(id){ 
    for(let q of this.Quizs)
    {
      if(q.id==id)
      {
        return q;
      }
    }
  }
  getClass():Observable<any>{
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/api/getclass',{headers:headers})
    .pipe(map(res=>res));
  }

}
  