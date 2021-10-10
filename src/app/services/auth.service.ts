import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
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
 
  isLoggedInAdmin(){

    let token = localStorage.getItem("myToken");

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if(decodedToken.data.role =="admin"){
        return true
      }else
      {return false ;}
    } else {
      return false;
    }
  }
  isLoggedInPatient(){

    let token = localStorage.getItem("myToken");

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if(decodedToken.data.role =="patient"){
        return true
      }else
      {return false ;}
    } else {
      return false;
    }
  }


}
