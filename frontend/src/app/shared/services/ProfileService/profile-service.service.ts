import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({ 
  providedIn: 'root'
})
export class ProfileServiceService {
  authToken:any;
  constructor(private http:HttpClient) { }

    //get user profile
    getUserProfile(id):Observable<any>{
      let headers=new HttpHeaders();
      headers.append('Content-Type','application-json');
      return this.http.get('http://localhost:3000/api/userprofile/'+id,{headers:headers})
      .pipe(map((res:Response)=>res));
    }
    //update user profile
    updateUserProfile(userData,id):Observable<any>{
      let headers=new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.put('http://localhost:3000/api/profileupdate/'+id,userData,{headers:headers})
      .pipe(map((res:Response)=>res));
    }
} 
