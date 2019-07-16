import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/shared/services/QuestionsService/questions.service';

@Component({
  selector: 'app-school-classes',
  templateUrl: './school-classes.component.html',
  styleUrls: ['./school-classes.component.css']
})
export class SchoolClassesComponent implements OnInit {
  classes=[];
  myForm:FormGroup
  constructor(private fb:FormBuilder,private QuesService:QuestionsService) { 
  }


  async ngOnInit() {
   this.myForm=this.fb.group({
    classname:""
   })
  let response=await this.QuesService.getClass();
   this.classes=response['res']
  // console.log(this.classes);
  }

 async submitClass(){
    let classname=this.myForm.value.classname;
    await this.QuesService.addClass(classname);
    this.myForm.reset();
    let response=await this.QuesService.getClass();
   this.classes=response['res'];
   console.log("comming",this.classes)
  }

}
