import { QuestionsService } from 'src/app/shared/services/QuestionsService/questions.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stu-dashoard',
  templateUrl: './stu-dashoard.component.html',
  styleUrls: ['./stu-dashoard.component.css']
})
export class StuDashoardComponent implements OnInit {
  user;
  classData;
  marksData;
  constructor(private QuesService:QuestionsService) { }
  
  async ngOnInit() {
  this.user=await JSON.parse(localStorage.getItem('user'));
  let respone=await this.QuesService.getMarks(this.user.id);
  this.classData=respone['res']; 
  this.marksData=this.classData[0].Marks;
  // console.log(this.marksData);
  console.log("marks",this.marksData);
  console.log("this.classData[0].Marks[0].Chapters[0].chapter_name",this.classData[0].Marks[0].Chapters[0].chapter_name);
  console.log("this.classData[0].Marks[0].Chapters[0].chapter_name",this.classData[0].Marks[1].Chapters[0].chapter_name);
}

}
