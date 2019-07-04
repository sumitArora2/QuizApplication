import { Ques } from './../../../classes/Ques';
import { QuestionsService } from './../../../shared/services/questions.service';
import { FormGroup, FormBuilder, FormArray,  } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teacher-quiz',
  templateUrl: './teacher-quiz.component.html',
  styleUrls: ['./teacher-quiz.component.css']
})
export class TeacherQuizComponent implements OnInit {
  newOption = [];
  // myForm:FormBuilder;
  
  question: Ques;
  sampleString: string = "";
  nestedForm: FormGroup;
  
  constructor(public QuesService: QuestionsService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.nestedForm = this.fb.group({
      Questions: this.fb.array([this.Questions]),
    });
  }

  get Questions():FormGroup{
    return this.fb.group({
      question_name:"",
      Options:this.fb.array([this.Options])
    })
   
  }
  get Options():FormGroup{
    return this.fb.group({
      option_name:""
    })
  }
  AddOptions(question){
    question.get("Options").push(this.Options)
   
  }
  AddQuestions(){
    (this.nestedForm.get("Questions") as FormArray).push(this.Questions)
  }
  removeQuestions(QuesIdx){
    console.log((this.nestedForm.get("Questions") as FormArray).removeAt(QuesIdx));
  }
  removeOptions(question,id){
  // console.log( question.get("Options").at(id).value);
  console.log(question.get("Options").removeAt(id));
  }
  submitForm(data) {
    console.log(data);
  }
}
//   AddQuestionsGroup():FormGroup {
//     return this.fb.group({
//       question: "",
//       OptionsGroup: this.fb.array([this.AddOptionsGroup()])
//   })
//   }
//   AddQuestions() {
//     this.QuestionsArray.push(this.AddQuestionsGroup());
//   }


//   removeQuestions(index) {
//     this.QuestionsArray.removeAt(index);
//   }
  
// //for options

// AddOptions() {
//   this.OptionsArray.push(this.AddOptionsGroup());
// }
// AddOptionsGroup() {
//   return this.fb.group({
//     Options: []
//   })
// }
// removeOptions(index) {
//     this.OptionsArray.removeAt(index);
//   }
 
//   get OptionsArray() {
//     console.log("this.nestedForm", <FormArray>this.AddQuestionsGroup().get('OptionsGroup'));
//     return <FormArray>this.AddQuestionsGroup().get('OptionsGroup');

//   }


  //   AddAnotherOptions(data){
  //   // console.log("id of question is",data);
  //   this.QuesService.AddOptions(data);
  //   }
  //   AddAnotherPannel(add:any){
  //   this.QuesService.addQuestions(this.sampleString);  
  // }
  //   removeQuestion(newQues){
  //     console.log("ssss",newQues.id);
  //    this.QuesService.removeQuestions(newQues.id);
  //   }


