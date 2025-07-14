let age : number = 5;
let agMonths : string = '20';
let isSenior : boolean = true;
let person : Object = {};

//una manera de declarar array
//let fruits: Array<String> =['manzana','pera'];

let fruits: Object[] = [{},{name:"manzana"}]; 

//Tipos especiales de TS
let response :any = "Hola";
response = 5;

function saludar(): void{
    console.log("Holaaa");
}

let response2 : unknown;
response2 = true;

//las que no estan disponibles o vacias 
let response3 : null;
//no han sido inicializadas
let response4 : undefined;

//Crear tipos de datos propios

type ResponseTypeService = number | undefined;
let response5 : ResponseTypeService;
response5?.toString();

let responseProduct : ResponseTypeService;
let responsePartner : ResponseTypeService;

responsePartner?.toString().concat('');

//Type Assertion
let message : any ="";
//(message as string).slice();
let messageUpperCase = <string> message;
messageUpperCase.toUpperCase();

//let canva = <HTMLCanvasElement> document.getElementById("canva");
//let canva = document.getElementById("canva") as HTMLCanvasElement;
