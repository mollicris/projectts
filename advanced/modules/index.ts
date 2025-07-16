//import { PI, generatyId } from "./utils.module"; 
//import { User as Person } from "./utils.module";
import  *  as Util from "./utils.module";

const myNumber = 10 * Util.PI;

const myUser: Util.User = {
    id:Util.generatyId(),
    name:"Ronaldo"
}

console.log(myUser);

