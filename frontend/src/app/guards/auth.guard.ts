import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../shared/services/Authetication/auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private authService:AuthServiceService,private router:Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.loggedIn()) {
      
      return true;
    }
    else{
      console.log("in else of authguards");
    this.router.navigate(['/login']);
    return false;
    }
}


}