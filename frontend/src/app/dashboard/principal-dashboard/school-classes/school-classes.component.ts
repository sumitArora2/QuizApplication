import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/shared/services/QuestionsService/questions.service';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-classes',
  templateUrl: './school-classes.component.html',
  styleUrls: ['./school-classes.component.css']
})
export class SchoolClassesComponent implements OnInit {
  classes=[];
  myForm:FormGroup
  editing:Boolean
  classId:any;
  role:any;
  constructor(private fb:FormBuilder,private QuesService:QuestionsService,private router:Router,private authService:AuthServiceService) { 
  }


  async ngOnInit() {
    // if(this.authService.loggedIn()){
    //   this.role=this.authService.getUserDetails()
    //   if(this.role==="student"){
    //     this.router.navigate(['studentHome']);
    //   }
    //   else if(this.role==="teacher"){
    //     this.router.navigate(['teacherHome']);
    //   }else if(this.role==="principal"){
    //     this.router.navigate(['SchoolClass']);
    //   }else{
    //     this.router.navigate(['login']);
    //   }
    // }
   this.myForm=this.fb.group({
    classname:""
   })
   this.editing=true
  let response=await this.QuesService.getClass();
   this.classes=response['res']
  }

 async submitClass(){
    let classname=this.myForm.value.classname;
    await this.QuesService.addClass(classname);
    this.myForm.reset();
    let response=await this.QuesService.getClass();
   this.classes=response['res'];
  }
  edit(data:any){
    this.myForm.patchValue({
      classname:data.class_name
    });
    this.editing=false;
  }
  async delete(data:any){
    this.editing=true;
    this.myForm.reset();
    await this.QuesService.deleteClass(data._id);
    let response=await this.QuesService.getClass();
    this.classes=response['res'];
  }
  async update(){
    this.editing=true;
    let classname=this.myForm.value.classname;
    await this.QuesService.updateClass(this.classId,classname);
    this.myForm.reset();
    let response=await this.QuesService.getClass();
    this.classes=response['res'];
  }
  cancel(){
    this.editing=true;
    this.myForm.reset();
  }

}
