import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 
  uri='http://localhost:4000';
  constructor(private http:HttpClient) { }

  postLogin(){
    // return this.http.post(`${this.uri}/authenticate`);
  }
}
 