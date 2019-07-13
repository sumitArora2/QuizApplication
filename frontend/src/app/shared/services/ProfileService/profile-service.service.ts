import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/Operators';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http:HttpClient) { }
    // for registeration
    completeProfile(user):Observable<any>{
      let headers =new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.put('http://localhost:3000/api/signup',user,{headers:headers})
      .pipe(map(res=>res));
    } 
}
