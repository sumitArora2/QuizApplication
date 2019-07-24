import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanDeactivate } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { StudentQuizComponent } from 'src/app/dashboard/student-dashboard/student-quiz/student-quiz.component';

@Injectable({
  providedIn: 'root'
})

export class QuizGuard implements CanActivate{
  constructor(private authService: AuthServiceService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.quizLoggedIn()) {
      console.log("guard working");
      return true;
    }
    else {
      console.log("in else of quiz");
      this.router.navigate(['/login']);
      return false;
    }
  }


}
