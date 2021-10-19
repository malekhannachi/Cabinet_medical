import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ord } from '../models/ord';

@Injectable({
  providedIn: 'root'
})
export class OrdService {

  private updateOrdonnanceUrl = "http://localhost:8080/ordonnances/update/"

  constructor(private httpClient: HttpClient) { }

  saveOrdonnance(ord: Ord) {
    return this.httpClient.post<Ord>("http://localhost:8080/ordonnances/add", ord);
    
  }

  getAllOrdonnances() {
    return this.httpClient.get<Ord>("http://localhost:8080/ordonnances/all");
    
  }

  deleteOrdonnance(id :any){
    return this.httpClient.delete<Ord>(`http://localhost:8080/ordonnances/delete/${id}`);
  }

 getOne(id: any){
    return this.httpClient.get<any>(`http://localhost:8080/ordonnances/one/${id}`);
  }

  updateOrdonnance(ord:Ord){
    return this.httpClient.patch<any>(this.updateOrdonnanceUrl, ord);
  }
}
