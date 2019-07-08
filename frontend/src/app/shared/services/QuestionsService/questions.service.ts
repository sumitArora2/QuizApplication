import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Ques } from '../../../classes/Ques';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
<<<<<<< HEAD
import { Observable } from 'rxjs';

=======
>>>>>>> 453e88d78c28be0ff8b03eb18fc14f5af9a215c3
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  // private nextId:number;
  // private questions:Ques[];
  // private optId:number;
  // // private quesId:[];
  // private newQuestion=[{}];
  constructor(private http:HttpClient) {
    // this.optId=0;
    // let questions=this.getQuestions();
    // if(questions.length==0){
    //   this.nextId=0;
    // }else{
    //   let maxId=questions.length-1;
    //   this.nextId=maxId+1;
    // }
   }

AddQuestion(question):Observable<Response>{
  let headers=new HttpHeaders();
  headers.append('Content-Type','application-json');
  return this.http.post('http://localhost:3000/api/question',question,{headers:headers})
  .pipe(map((res:Response)=>res));
}
   


  //get the questions from the local storage
  // public getQuestions(){
  //   let localStorageItem=JSON.parse(localStorage.getItem('questions'));
  //   return localStorageItem==null ? []:localStorageItem.questions;
  // }
  //adding the questions in the local storage
  // public addQuestions(text:string){
  //  let question=new Ques(this.nextId,text,[]);
  //  let questions=this.getQuestions();
  //  questions.push(question)
  //  this.SetLocalStorageQuestions(questions);
  //  this.nextId++;
  // }
  //remove the questions from the local storage
  // public removeQuestions(id:number):void{
  //   let questions=this.getQuestions();
  //   questions=questions.filter((data)=>data.id!=id);
  //   this.SetLocalStorageQuestions(questions);
  // } 
  // public AddOptions(QuesId){
  //   let question=this.getQuestions();
  //  question[QuesId].option.push({"optValue":"sumit"});
  //   this.SetLocalStorageQuestions(question);
  // }
  // public RemoveOptions(){

  // }
  // public getOptions(){
  //   let localStorageItem=JSON.parse(localStorage.getItem('questions'));
  //   return localStorageItem==null ? []:localStorageItem.questions.option;
  // }
  // private SetLocalStorageQuestions(questions:Ques[]):void{
  //  localStorage.setItem('questions',JSON.stringify({questions:questions}));
  // }
  //  private setLocalStorageWithOptions(id){
  //   let questions=this.getQuestions();

  //  }
}
