import { QuestionsService } from './../../../shared/services/QuestionsService/questions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/Authetication/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  role: any;
  Wholeclass = {};
  constructor(private authservice: AuthServiceService,
    private router: Router,
    private toastr: ToastrService, private QuesService: QuestionsService) { }

  async ngOnInit() {
    if (this.authservice.loggedIn()) {
      this.role = this.authservice.getUserDetails()
      if (this.role === "student") {
        this.router.navigate(['studentHome']);
        let userclass = await this.authservice.getClassLocalStorage().class;
        let response = await this.QuesService.getClass();
        let classes = response['res'];
        for (let i = 0; i < classes.length; i++) {
          if (userclass == classes[i].class_name) {
            this.Wholeclass=classes[i];
          }
        }
        console.log("this.class", this.Wholeclass);
      }
      else if (this.role === "teacher") {
        this.router.navigate(['teacherHome']);
      } else if (this.role === "principal") {
        this.router.navigate(['princiHome']);
      } else {
        this.router.navigate(['login']);
      }
    }
  }
  Logoutclick() {
    this.authservice.logout();
    this.toastr.success('you are logged out');
    this.router.navigate(['/login']);
    return false;

  }
}
