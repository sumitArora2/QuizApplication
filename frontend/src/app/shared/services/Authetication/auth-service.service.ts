import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 userauth:any;
 authToken:any; 

  // uri='http://localhost:4000';
  constructor(private http:HttpClient) { }

  postLogin(userauth){
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/authenticate',userauth,{headers:headers})
  .pipe(map(res=>res));
  }
}
 