import { environment } from './../../../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  subject:any;
  chapter:any; 
  chapterId:any;
  userId:any;
  role:any;
  constructor(private http:HttpClient) {
   }
AddQuestion(id,question){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application-json');
  return this.http.post(`${environment.API}/addquestion/${id}`,question,{headers:headers}).toPromise();
}
getQuestions(){ 
  let headers=new HttpHeaders();  
  headers.append('Content-Type','application/json');
  // 'http://localhost:3000/api/question'
  return this.http.get(`${environment.API}/question`,{headers:headers}).toPromise();
}
addClass(classname){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  // 'http://localhost:3000/api/addclass'
  return this.http.post( `${environment.API}/addclass`,{'class_name':classname},{headers:headers}).toPromise();
}
getClass(){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  // 'http://localhost:3000/api/getclass'
  return this.http.get( `${environment.API}/getclass`,{headers:headers}).toPromise();
}
getSpecificClass(data){
   
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.get(`${environment.API}/getSpecificClass/${data}`,{headers:headers}).toPromise();
}
updateClass(id,classname){
let headers=new HttpHeaders();
headers.append('Content-Type','applications/json');
// 'http://localhost:3000/api/updateClass/'+id
return this.http.put( `${environment.API}/updateClass/${id}`,{'class_name':classname},{headers:headers}).toPromise();
}
deleteClass(id){
let headers=new HttpHeaders();
headers.append('Content-type','application/json');

return this.http.delete(`${environment.API}/deleteClass/${id}`,{headers:headers}).toPromise();
}

AddSubject(data){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.patch(`${environment.API}/addsubject/${data.class}`,data,{headers:headers}).toPromise();
}
getSubjects(){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  // 'http://localhost:3000/api/getsubject'
  return this.http.get( `${environment.API}/getsubject`,{headers:headers}).toPromise();
}
AddChapter(data){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.post(  `${environment.API}/addchapter/${data.class}/${data.subject}`,{'chapter_name':data.chapter},{headers:headers}).toPromise();
}
//for click on particular subject in student dashboard
sendSubjectId(data){
this.subject=data;
}
sendChapterBYId(data){
this.chapter=data;
}
getchptrSubjct(){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  // 'http://localhost:3000/api/getchapters/'+this.subject
  return this.http.get( `${environment.API}/getchapters/${this.subject}`,{headers:headers}).toPromise();
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
  // 'http://localhost:3000/api/marks/'+this.userId+'/'+this.chapterId
  return this.http.post(`${environment.API}/marks/${this.userId}/${this.chapterId}`,{'marks':marks},{headers:headers}).toPromise();
}
getMarks(userId){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application.json');
  // 'http://localhost:3000/api/marks/'+userId
  return this.http.get( `${environment.API}/marks/${userId}`,{headers:headers}).toPromise();
}
getallStudentMarks(role){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  // 'http://localhost:3000/api/allMarks/'+role
  return this.http.get( `${environment.API}/allMarks/${role}`,{headers:headers}).toPromise();
}

//add more questions in existing chapter
   addMoreQuestion(id,question){
    let headers=new HttpHeaders();
    headers.append('Content-Type','application-json');
    return this.http.patch(  `${environment.API}/addmorequestion/${id}`,question,{headers:headers}).toPromise();
    // .pipe(map((res:Response)=>res));
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
