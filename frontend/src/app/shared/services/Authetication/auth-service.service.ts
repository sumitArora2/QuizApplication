import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/Operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  authToken:any;
  user:any;

  constructor(private http:HttpClient) { }
  // for registeration
  registerUser(user):Observable<any>{
    let headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/signup',user,{headers:headers})
    .pipe(map(res=>res));
  }
// fr login 
  postLogin(userauth):Observable<any>{
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/authenticate',userauth,{headers:headers})
  .pipe(map(res=>res));
  }
 
}
 