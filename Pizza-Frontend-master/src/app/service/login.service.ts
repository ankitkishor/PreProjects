import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userUrl:string;

  constructor(private http:HttpClient) {
    this.userUrl ="http://localhost:8081/Pizza-Service";
   }
   
}
