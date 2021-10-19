import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getAllUsersUrl = "http://localhost:8080/users/all";
  private deleteUserUrl = "http://localhost:8080/users/delete/";
  private getOneUserUrl = "http://localhost:8080/users/one/";
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(this.getAllUsersUrl);
  }

  deleteUser(id:any){
    return this.http.delete<any>(this.deleteUserUrl+id);
  }
  getOneUser(id: any) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }


}
