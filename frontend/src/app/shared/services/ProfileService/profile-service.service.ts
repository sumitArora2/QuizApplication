import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({ 
  providedIn: 'root'
})
export class ProfileServiceService {
  authToken:any;
  role="";
  constructor(private http:HttpClient) { }

    //get user profile
    getUserProfile(id):Observable<any>{
      let headers=new HttpHeaders();
      headers.append('Content-Type','application-json');
      // 'http://localhost:3000/api/userprofile/'+id
      return this.http.get( `${environment.API}/userprofile/${id}`,{headers:headers})
      .pipe(map((res:Response)=>res));
    }
    //update user profile
    updateUserProfile(userData,id):Observable<any>{
      let headers=new HttpHeaders();
      headers.append('Content-Type','application/json');
      // 'http://localhost:3000/api/profileupdate/'+id
      return this.http.put( `${environment.API}/profileupdate/${id}`,userData,{headers:headers})
      .pipe(map((res:Response)=>res));
    }
     setrole(data){
       this.role=data;
     }
    getDetails(){ 
      let headers=new HttpHeaders();
      headers.append('Content-Type','application/json');
      // 'http://localhost:3000/api/getDetails/'+this.role
      return this.http.get( `${environment.API}/getDetails/${this.role}`,{headers:headers}).toPromise();
    }

} 
