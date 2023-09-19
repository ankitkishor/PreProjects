import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PizzaService } from '../service/pizza.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,private pizzaService:PizzaService){}

  registerForm=this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required,Validators.minLength(6)]
  })

  onSubmit(){
    alert("Registered Successfully");
  }

  // saveData(){
  //   this.pizzaService.save(this.registerForm.value).subscribe(data=>{
  //     alert("Registered Successfully");
  //   })
  // }

}
