import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Ques } from '../../../classes/Ques';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http:HttpClient) {

   }

AddQuestion(question){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application-json');
  return this.http.post('http://localhost:3000/api/question',question,{headers:headers})
  .pipe(map((res:Response)=>res));
}
   
getQuestions(){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application-json');
  return this.http.get('http://localhost:3000/api/questions',{headers:headers})
  .pipe(map((res:Response)=>res));
}
addClass(classname){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/api/addclass',{'class_name':classname},{headers:headers}).toPromise();
}

getClass(){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.get('http://localhost:3000/api/getclass',{headers:headers}).toPromise();
}
AddSubject(data){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  // console.log("data",data);
  return this.http.patch(`http://localhost:3000/api/addsubject/${data.class}`,data,{headers:headers}).toPromise();
}
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
