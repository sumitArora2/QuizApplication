import { ComplaintServiceService } from './../../../shared/services/Complaints/complaint-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  complaintForm:FormGroup;
  complaints=[];

  constructor(private complaintService:ComplaintServiceService,private router:Router,private flashService:FlashMessagesService) { }

  ngOnInit() {

    let user=JSON.parse(localStorage.getItem('user'));
    console.log("user role show  ", user.role);
    if(user.role==="principal"){
      document.getElementById("viewComplaintDiv").style.visibility="visible";
      document.getElementById("studentComplaintDiv").style.visibility="hidden";
    }
    else{
      document.getElementById("viewComplaintDiv").style.visibility="hidden";
      document.getElementById("studentComplaintDiv").style.visibility="visible";
    }

    this.complaintForm = new FormGroup({

      'firstname' : new FormControl(null, [Validators.required,Validators.maxLength(25)]),
      'lastname': new FormControl(null,[Validators.required,Validators.maxLength(25)]),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'message' : new FormControl(null,[Validators.required,Validators.maxLength(50)])
  });
  //get complaint

this.complaintService.getComplaint().subscribe(data=>{
    if(data.success){
      console.log(data);
      console.log("email  ",data.res[0].email);
      console.log("all data  ",data.res);
      this.complaints=data.res;
      // console.log(this.complaints[0].email);
    //  console.log("this.complaints",this.complaints)
      // let abc=this.complaints;
      // console.log("for test:   ",abc[0].firstname);
    }
    else{
      console.log("aaaaaaaaaaa");
    }
});


}
//on complaint

onComplaint(){
  console.log(this.complaintForm.value);
  this.complaintService.complaintStudent(this.complaintForm.value).subscribe(data=>{
    if(data.success){
      this.flashService.show('your complaint is registered now', { cssClass: 'alert-success', timeout: 3000 });
     this.router.navigate(['studentHome']);
      
    }
    else{
      this.flashService.show('something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
           this.router.navigate(['complaints']);

    }
  });
}
}

