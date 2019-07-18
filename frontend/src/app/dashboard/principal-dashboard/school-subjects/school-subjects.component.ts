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
  editing:Boolean;
  showSubjectList:Boolean
  subjectList=[];
  constructor(private fb:FormBuilder,private QuesService:QuestionsService) {
    
  
this.myForm=this.fb.group({
    subjectname:"",
    class:""
  });
}
  async ngOnInit() {
    this.showSubjectList=false;
  this.showsubject=false;
  this.editing=true;
  let response=await this.QuesService.getClass();
  this.classes=response['res'] 
  console.log("this.classes",this.classes);
  let response2=await this.QuesService.getSubjects();
  this.subjects= response2['res'];
  console.log("this.subjects",this.subjects);
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
  edit(data){
  // console.log("data",data);
  this.showSubjectList=true;
  
//   data.Subjects.map((subjectList)=>{
//    subjectList=subjectList.subject_name;
//   this.subjectList.push(subjectList);
// })
//   console.log("this.subjectList",this.subjectList);
  // this.editing=false;
  // console.log("data.Subjects[0].subject_name",data.Subjects[0].subject_name);
  this.subjectList=data.Subjects;
}
update(){
    console.log("in update");
}
EditSubject(data){
console.log("data",data);
}
deleteSubject(data){
console.log("data",data);
}
CancelSubjectList(){
  this.showSubjectList=false;
  console.log("in subject cancel");
  
}
cancelUpdate(){
    this.myForm.reset();
    this.editing=true;
  }
  cancelSubjects(){
    this.showsubject=false;
  }
  async delete(data){
  console.log("in delete");
  this.editing=true;
  console.log("class id is ",data._id);
  await this.QuesService.deleteClass(data._id);
  this.myForm.reset();
  let response=await this.QuesService.getClass();
  this.classes=response['res'];
  }
}
