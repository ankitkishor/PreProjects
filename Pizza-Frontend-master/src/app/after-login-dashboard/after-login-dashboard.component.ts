import { Component } from '@angular/core';

@Component({
  selector: 'app-after-login-dashboard',
  templateUrl: './after-login-dashboard.component.html',
  styleUrls: ['./after-login-dashboard.component.css']
})
export class AfterLoginDashboardComponent {

  pizzaForm:any;

  constructor(private afterLoginDashboard:AfterLoginDashboardComponent){

    this.pizzaForm={
      pizzId:'',
      pizzaName:'',
      topping:'',
      size:'',
      quantity:''
    }
   }

  ngOnInit(): void {
  }

  addedPizza:any;

  onPlaceOrder(data:any){
    console.log(data);
    alert("Order Placed Successfully.")
    console.log("add content is working");
    // console.log(pizzaform);

    this.dashSer. addPizzas(data).subscribe(
      a=>{
        this.addedPizza=a;
        confirm("Pizza Added");
        window.localStorage.setItem('pizzaId',this.pizzaForm.pizzaId);
        console.log(a);
        // this.getAllContent();
      },(error)=>{
        console.log(error);
        
      }
    )
  };

  pizzas:any;

  getAllPizzas(){
    
    console.log("Showing user orders");
    // console.log("what your are printing12->",localStorage.getItem("emailId"));
   this.afterLoginDashboard.getAllPizzas().subscribe(
    a=>{
      this.pizzas=a;
      
      console.log("your order details",a);
    },
    (error)=>{
      console.log(error);
      
    }
   )
  };
 
  
  logout(){
    window.localStorage.clear();
    confirm("Succesfully LogOut")
  }
}
