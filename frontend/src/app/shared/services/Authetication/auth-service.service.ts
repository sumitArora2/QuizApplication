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
  AuthLogin(userauth):Observable<any>{
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/authenticate',userauth,{headers:headers})
  .pipe(map(res=>res));
  }
  loggedIn(){
    // console.log("loggedin", this.authToken);
    if(this.authToken)
      return true;
    return false;
  }
  storeUserData(token, user) {

    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    //console.log(this.authToken, token)
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
    this.authToken = token;
  }
 
}

 