import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  constructor(private fb:FormBuilder){}

  loginForm=this.fb.group({
    email:[null,Validators.required],
    password:[null,Validators.required,Validators.minLength(6)]
  })

  onSubmit(){
    alert("Logged in Successfully");
  }


}
