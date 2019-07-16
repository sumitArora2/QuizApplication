import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  authToken:any;
  user:any;
  authRole:any;
  student:any;
  constructor(private http:HttpClient) { }
  // for registeration
  registerUser(user):Observable<any>{
    let headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/signup',user,{headers:headers})
    .pipe(map(res=>res));
  } 

  //fr complaint
  complaintStudent(student):Observable<any>{
    let headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/complaint',student,{headers:headers})
    .pipe(map(res=>res));
  }





// fr login 
  AuthLogin(userauth):Observable<any>{
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/authenticate',userauth,{headers:headers})
  .pipe(map(res=>res));
  }
  storeUserData(token, user) {

    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    // console.log(this.authToken, this)
  }
  loggedIn(){
    // console.log("loggedin", this.authToken);
    var token=this.getToken();
    if(token)
      return true;
    return false;
  }
  getToken() {
    return localStorage.getItem('id_token');
  }
  getUserDetails(){
    let user=JSON.parse(localStorage.getItem('user'));
    if(user)
      return user.role;
  }
 
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  getProfile(){
    let headers =new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/api/profile',{ headers: headers })
      .pipe(map(res=>Response ));
  }  
    
  loadToken(){ 
    const token = localStorage.getItem('id_token');
    const user = localStorage.getItem('user.role');
    this.authToken = token;
  }
 
}

 