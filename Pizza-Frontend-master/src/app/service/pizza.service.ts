import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizzaUrl:string;

  constructor(private http:HttpClient) {
    this.pizzaUrl= "http://localhost:8081/Pizza-Service";
   }

   public getAllUser():Observable<Pizza[]>{
    return this.http.get<Pizza[]>(this.pizzaUrl);
   }

   public save(user:Pizza){
    return this.http.post<Pizza>(this.pizzaUrl, user);
   }
}
