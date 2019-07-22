import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class QuizGuard implements CanActivate {
  constructor(private authService:AuthServiceService,private router:Router){}
  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(this.authService.quizLoggedIn()){
      return true
    }
    else{
    this.router.navigate(['/home']);
    return false;
    }
    

  }
  
}
