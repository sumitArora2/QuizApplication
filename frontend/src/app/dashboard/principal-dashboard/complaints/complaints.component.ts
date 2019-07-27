import { ComplaintServiceService } from './../../../shared/services/Complaints/complaint-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  complaintForm:FormGroup;
  complaints=[];
  filterText:any;

  constructor(private complaintService:ComplaintServiceService,private router:Router,private toastr:ToastrService,private _location: Location) { }

  ngOnInit() {

    let user=JSON.parse(localStorage.getItem('user'));
    console.log("user role show  ", user.role);
    if(user.role==="principal"){
      document.getElementById("viewComplaintDiv").style.visibility="visible";
      document.getElementById("studentComplaintDiv").style.visibility="hidden";
    }
    else if(user.role==="student"){
      document.getElementById("viewComplaintDiv").style.visibility="hidden";
      document.getElementById("studentComplaintDiv").style.visibility="visible";
    }
    else{
      this.router.navigate(['teacherHome']);
    }

    this.complaintForm = new FormGroup({

      'username' : new FormControl(null, [Validators.required,Validators.maxLength(25)]),
      'lastname': new FormControl(null,[Validators.required,Validators.maxLength(25)]),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'message' : new FormControl(null,[Validators.required,Validators.maxLength(50)])
  });
  //get complaint

this.complaintService.getComplaint().subscribe(data=>{
    if(data.success){
      console.log(data);
      // console.log("email  ",data.res[0].email);
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
     this.toastr.success("your complaint is registered now");
     this.router.navigate(['studentHome']);
      
    }
    else{
      this.toastr.error("your complaint is not registred");
           this.router.navigate(['complaints']);

    }
  });
}
searchComplaint(){
  console.log("data is here",this.filterText);
  // this.filterText='';
 }

//  Back Button
 goBack(){
  console.log("go back works");
  this._location.back();
}
}

