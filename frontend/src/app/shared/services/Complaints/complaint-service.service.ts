import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from  'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintServiceService {
  student:any;

  constructor(private http:HttpClient) { }
  complaintStudent(student):Observable<any>{
    let headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    // 'http://localhost:3000/api/complaint'
    return this.http.post( `${environment.API}/complaint`,student,{headers:headers})
    .pipe(map(res=>res));
  }
  getComplaint():Observable<any>{
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    // 'http://localhost:3000/api/getComplaint'
    return this.http.get( `${environment.API}/getComplaint`,{headers:headers})
    .pipe(map(res=>res));
    
  }
}
