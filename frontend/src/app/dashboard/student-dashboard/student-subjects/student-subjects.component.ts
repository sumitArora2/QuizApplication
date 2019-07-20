
import { QuestionsService } from './../../../shared/services/QuestionsService/questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.css']
})
export class StudentSubjectsComponent implements OnInit {
  chapters={};
  constructor(private questionService:QuestionsService) { }

  async ngOnInit() {
  let response=await this.questionService.getchptrSubjct();
   this.chapters=response['res'];
  // let response = await this.QuesService.getClass();
  // let classes = response['res'];
  console.log("this.chapters",this.chapters);  
}

}
