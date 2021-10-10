import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUserUrl = "http://localhost:8080/users/register"
  private loginUserUrl = "http://localhost:8080/users/login"

  constructor(private http: HttpClient) { }
  registerUser(user :User) {
    return this.http.post<any>(this.registerUserUrl, user)
  }

  loginUser(user :User) {
    return this.http.post<any>(this.loginUserUrl, user)
  }
  
  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
 
}
