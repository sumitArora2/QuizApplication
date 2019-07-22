import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';

@Component({
  selector: 'app-quiz-instructions',
  templateUrl: './quiz-instructions.component.html',
  styleUrls: ['./quiz-instructions.component.css']
})
export class QuizInstructionsComponent implements OnInit {
  timeLeft= 60;
  interval;
  role:any;
  constructor(private router:Router,private authService:AuthServiceService) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.role=this.authService.getUserDetails()
      if(this.role==="student"){
        this.router.navigate(['quizInstruction']);
      }
      else if(this.role==="teacher"){
        this.router.navigate(['teacherHome']);
      }else if(this.role==="principal"){
        this.router.navigate(['princiHome']);
      }else{
        this.router.navigate(['login']);
      }
    }

    
    this.timeLeft=60;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }
  StartQuiz(){
    this.router.navigate(['/studentQuiz']);
  }
}
