import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/Operators';
=======
import { HttpClient } from '@angular/common/http';

>>>>>>> 7ddbfc32d42483d023984bdc344cae36da74e7bf
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 userauth:any;
 authToken:any; 

  // uri='http://localhost:4000';
  constructor(private http:HttpClient) { }

<<<<<<< HEAD
  postLogin(userauth){
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/authenticate',userauth,{headers:headers})
  .pipe(map(res=>res));
  }
=======
  constructor(http:HttpClient) { }
>>>>>>> 7ddbfc32d42483d023984bdc344cae36da74e7bf
}
 