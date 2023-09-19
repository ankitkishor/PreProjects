import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginDashboardService {

  url:String="http://localhost:8081/Pizza-Service";

  constructor(private http:HttpClient) { }

  requestHeader =new HttpHeaders().set('Authorization','Bearer '+window.localStorage.getItem('token'));

  getAllPizzas(){
    console.log(localStorage.getItem("email"));
    console.log("getallPizzas from ts is working");
      return this.http.get<any>(this.url+window.localStorage.getItem("email")+"/pizzas",{'headers':this.requestHeader});
    }
  
  
    addPizza(data:any){
      console.log();
      
      console.log(localStorage.getItem("email"));
      return this.http.post<any>(this.url+localStorage.getItem("email")+"/pizza",data,{'headers':this.requestHeader});
    }
  

}
