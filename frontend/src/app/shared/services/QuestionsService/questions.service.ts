import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  subject:any;
  chapterId:any;
  userId:any;
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
  headers.append('Content-Type','application/json');
  return this.http.patch(`http://localhost:3000/api/addsubject/${data.class}`,data,{headers:headers}).toPromise();
}
getSubjects(){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.get('http://localhost:3000/api/getsubject',{headers:headers}).toPromise();
}
AddChapter(data){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.post(`http://localhost:3000/api/addchapter/${data.class}/${data.subject}`,{'chapter_name':data.chapter},{headers:headers}).toPromise();
}
//for click on particular subject in student dashboard
sendSubjectId(data){
this.subject=data;
}
getchptrSubjct(){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.get('http://localhost:3000/api/getchapters/'+this.subject,{headers:headers}).toPromise();
}

sendChapterId(Uid,Cid){
  this.chapterId=Cid;
  this.userId=Uid;

 }
addMarks(marks){
  console.log("this.userid",this.userId);
  console.log("this.chapterId",this.chapterId);
  console.log("marks",marks);
  
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/api/marks/'+this.userId+'/'+this.chapterId,{'marks':marks},{headers:headers}).toPromise();
}
getMarks(userId){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application.json');
  return this.http.get('http://localhost:3000/api/marks/'+userId,{headers:headers}).toPromise();
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
