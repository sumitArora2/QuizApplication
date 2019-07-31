
import { QuestionsService } from './../../../shared/services/QuestionsService/questions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.css']
})
export class StudentSubjectsComponent implements OnInit {
  chapters={};
  role:any;
  user:any;
  constructor(private questionService:QuestionsService,private router:Router,private authService:AuthServiceService) { }

  async ngOnInit() {
  let response=await this.questionService.getchptrSubjct();
   this.chapters=response['res'];
  console.log("this.chapters",this.chapters);  
}
async sendChapter(ChapId){
  this.user=await JSON.parse(localStorage.getItem('user'));
this.questionService.sendChapterId(this.user.id,ChapId);
}

}
