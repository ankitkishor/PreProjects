import { Pizza } from "./pizza";

export class User {
    email: string="";
    password: string="";
    firstName:string="";
    lastName:string="";
    pizzas?:Pizza[]=[];
}
