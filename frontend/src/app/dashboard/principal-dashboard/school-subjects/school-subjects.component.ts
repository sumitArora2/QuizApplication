import { QuestionsService } from 'src/app/shared/services/QuestionsService/questions.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-school-subjects',
  templateUrl: './school-subjects.component.html',
  styleUrls: ['./school-subjects.component.css']
})
export class SchoolSubjectsComponent implements OnInit {
  showsubject:any;
  myForm:FormGroup
  classes=[];
  subjects=[];
  constructor(private fb:FormBuilder,private QuesService:QuestionsService) {
    
  
  this.myForm=this.fb.group({
    subjectname:"",
    class:""
  });
}
  async ngOnInit() { 
  this.showsubject=false;
  let response=await this.QuesService.getClass();
  this.classes=response['res']
  console.log("in ng on init",this.classes);  
  let response2=await this.QuesService.getSubjects();
  this.subjects= response2['res'];
  console.log("this.subjectes",this.subjects);

}
  showsubjectForm(){
    this.showsubject=true;
  }
  async submitsubject(){
  await this.QuesService.AddSubject(this.myForm.value);
  this.myForm.reset();
  let response=await this.QuesService.getClass();
   this.classes=response['res'];
   
  }
}
