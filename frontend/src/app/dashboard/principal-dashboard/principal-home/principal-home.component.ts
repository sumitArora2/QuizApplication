import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-principal-home',
  templateUrl: './principal-home.component.html',
  styleUrls: ['./principal-home.component.css']
})
export class PrincipalHomeComponent implements OnInit {
  role:any;

  constructor(private authService:AuthServiceService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.role=this.authService.getUserDetails()
      if(this.role==="student"){
        this.router.navigate(['studentHome']);
      }
      else if(this.role==="teacher"){
        this.router.navigate(['teacherHome']);
      }else if(this.role==="principal"){
        this.router.navigate(['princiHome']);
      }else{
        this.router.navigate(['login']);
      }
    }

    
  }
  Logoutclick()
  {
    this.authService.logout();
    this.toastr.success('you are logged out');
    this.router.navigate(['/login']);
    return false;
  }


}
