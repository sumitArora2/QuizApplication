import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Ques } from '../../../models/Ques';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http:HttpClient) {

   }
AddQuestion(id,question){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application-json');
  return this.http.post(`http://localhost:3000/api/addquestion/${id}`,question,{headers:headers}).toPromise();
}
getQuestions(){ 
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.get('http://localhost:3000/api/question',{headers:headers}).toPromise();
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
getSpecificClass(data){
  
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.get(`http://localhost:3000/api/getSpecificClass/${data}`,{headers:headers}).toPromise();
}
updateClass(id,classname){
let headers=new HttpHeaders();
// console.log("in service",id);
// console.log("in service",classname);
headers.append('Content-Type','applications/json');
return this.http.put('http://localhost:3000/api/updateClass/'+id,{'class_name':classname},{headers:headers}).toPromise();
}
deleteClass(id){
let headers=new HttpHeaders();
headers.append('Content-type','application/json');

return this.http.delete(`http://localhost:3000/api/deleteClass/${id}`,{headers:headers}).toPromise();
}

AddSubject(data){
  let headers=new HttpHeaders();
  // console.log("data",data);
  headers.append('Content-Type','application/json');
  return this.http.patch(`http://localhost:3000/api/addsubject/${data.class}`,data,{headers:headers}).toPromise();
}
getSubjects(){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.get('http://localhost:3000/api/getsubject',{headers:headers}).toPromise();
}
AddChapter(data){
  console.log("data is here",data);
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.post(`http://localhost:3000/api/addchapter/${data.class}/${data.subject}`,{'chapter_name':data.chapter},{headers:headers}).toPromise();
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
