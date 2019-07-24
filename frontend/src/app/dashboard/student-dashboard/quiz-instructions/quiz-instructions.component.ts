import { QuestionsService } from 'src/app/shared/services/QuestionsService/questions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-quiz-instructions',
  templateUrl: './quiz-instructions.component.html',
  styleUrls: ['./quiz-instructions.component.css']
})
export class QuizInstructionsComponent implements OnInit {
  timeLeft= 60;
  interval;
  role:any;
  user:any;
  constructor(private router:Router,
    private authService:AuthServiceService,
    private cookie:CookieService,private quesService:QuestionsService) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.role=this.authService.getUserDetails()
      if(this.role==="student"){
        if(this.authService.quizLoggedIn()){
          this.router.navigate(['studentQuiz']);  
        }else{
          this.router.navigate(['quizInstruction']);
        }
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
  async StartQuiz(){
    this.authService.createCookie();
    this.router.navigate(['/studentQuiz']);
  }
}
