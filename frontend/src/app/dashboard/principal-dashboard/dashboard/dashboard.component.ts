import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from 'src/app/shared/services/ProfileService/profile-service.service';
import { QuizserviceService } from 'src/app/shared/services/QuizService/quizservice.service';
import { QuestionsService } from 'src/app/shared/services/QuestionsService/questions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role:any;
  classData;
  marksData;
userName;
  filterText: any;
  constructor(private profileService:ProfileServiceService,private questionService:QuestionsService) { }


 async ngOnInit() {
    this.role="student";
    let response= await this.questionService.getallStudentMarks(this.role);
    console.log("role",this.role);    
    this.classData=response['res']; 
    console.log('this.classData',this.classData);
   console.log("marksdata",this.classData);
  }

async sendDetails(data){
  // console.log("data is here",data);
  // let response=await this.profileService.getDetails(data);
  this.profileService.setrole(data);
}
studentMarks(){
  console.log("data is here",this.filterText);
   this.filterText='';
}
}
