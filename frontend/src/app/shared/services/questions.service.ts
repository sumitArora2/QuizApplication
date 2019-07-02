import { Ques } from './../../classes/Ques';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private nextId:number;
  private questions:Ques[];
  // private quesId:[];
  private newQuestion=[{}];
  constructor() {
    let questions=this.getQuestions();
    if(questions.length==0){
      this.nextId=0;
    }else{
      let maxId=questions.length-1;
      this.nextId=maxId+1;
    }
   }
  //get the questions from the local storage
  public getQuestions(){
    let localStorageItem=JSON.parse(localStorage.getItem('questions'));
    return localStorageItem==null ? []:localStorageItem.questions;
  }
  //adding the questions in the local storage
  public addQuestions(){
   let question=new Ques(this.nextId);
   let questions=this.getQuestions();
   questions.push(question)
   this.SetLocalStorageQuestions(questions);
   this.nextId++;
  }
  //remove the questions from the local storage
  public removeQuestions(id:number):void{
    let questions=this.getQuestions();
    questions=questions.filter((data)=>data.id!=id);
    this.SetLocalStorageQuestions(questions);
  }
  public AddOptions(){

  }
  public RemoveOptions(){

  }
  public getOptions(){

  }
  private SetLocalStorageQuestions(questions:Ques[]):void{
   localStorage.setItem('questions',JSON.stringify({questions:questions}));
  }

}
