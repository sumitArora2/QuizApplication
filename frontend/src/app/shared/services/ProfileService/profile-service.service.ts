import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({ 
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http:HttpClient) { }

    //get user profile
    getUserProfile(){
      let headers= new HttpHeaders();
      headers.append('Authorization','application/json');
      return this.http.get("http://localhost:3000/api/profile", {headers:headers})
      .pipe(map(res=>Response));
    }

    //update user profile
    updateUserProfile(){
      let headers=new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.put(`http://localhost:3000/api/profileupdate/:id`,{headers:headers})
      .pipe(map((res:Response)=>res));
    }
}
