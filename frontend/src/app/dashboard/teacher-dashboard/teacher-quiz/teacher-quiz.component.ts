import { Ques } from './../../../classes/Ques';
import { QuestionsService } from '../../../shared/services/QuestionsService/questions.service';
import { FormGroup, FormBuilder, FormArray, } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teacher-quiz',
  templateUrl: './teacher-quiz.component.html',
  styleUrls: ['./teacher-quiz.component.css']
})
export class TeacherQuizComponent implements OnInit {
  newOption = [];
  question: Ques;
  nestedForm: FormGroup;
  Queslength: number
  Optslength: number
  constructor(public QuesService: QuestionsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.Queslength = 1;
    this.Optslength = 1;
    this.nestedForm = this.fb.group({
      dept_name: "",
      Questions: this.fb.array([this.Questions]),
    });
    // console.log("forms==>>", this.nestedForm);
  }

  get QuestionControl() {
    return <FormArray>this.nestedForm.get('Questions');
  }
  getOptionControl(question:any) {
    return <FormArray>question.get('Options')
  }
  get Questions(): FormGroup {
    return this.fb.group({
      // quesId: this.Queslength,
      question_name: "",
      Options: this.fb.array([this.Options])
    })
  }

  get Options(): FormGroup {
    return this.fb.group({
      // optsId: this.Optslength,
      option_name: "",
      IsAnswer: ""
    })
  }
  AddOptions(question) {
    this.Optslength++;
    question.get("Options").push(this.Options)
  }
  AddQuestions() {
    this.Queslength++;
    (this.nestedForm.get("Questions") as FormArray).push(this.Questions);

  }

  removeQuestions(QuesIdx) {
    console.log((this.nestedForm.get("Questions") as FormArray).removeAt(QuesIdx));
  }
  removeOptions(question, id) {
    console.log(question.get("Options").removeAt(id));
  }
  sendOptsId(QuesIdx, OptIdx) {
    const question = (this.nestedForm.get("Questions") as FormArray).value;
    question[QuesIdx].Options.map(option => option.IsAnswer = false);
    question[QuesIdx].Options[OptIdx].IsAnswer = true;
    // console.log((this.nestedForm.get("Questions") as FormArray).value)
  }
  submitForm(data) {
    console.log(data);
    // const QuesData={
    //  dept_name:data.dept_name,
    //  Questions:[
    //    {
    //      ques_name:data.question_name,
    //      Options:[
    //        {
    //          opts_name:data.option_name,
    //          IsAnswer:data.IsAnswer
    //        }
    //      ]
    //    }
    //  ]
    // }
   
    this.QuesService.AddQuestion(data).subscribe(data=>{
      if(data){
      console.log("posted successfull now you can go");
      }else{
        console.log("data not posted");
      }
    })
  }
}


