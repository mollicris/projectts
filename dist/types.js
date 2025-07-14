var age = 5;
var agMonths = '20';
var isSenior = true;
var person = {};
//una manera de declarar array
//let fruits: Array<String> =['manzana','pera'];
var fruits = [{}, { name: "manzana" }];
//Tipos especiales de TS
var response = "Hola";
response = 5;
function saludar() {
    console.log("Holaaa");
}
var response2;
response2 = true;
//las que no estan disponibles o vacias 
var response3;
//no han sido inicializadas
var response4;
var response5;
response5 === null || response5 === void 0 ? void 0 : response5.toString();
var responseProduct;
var responsePartner;
responsePartner === null || responsePartner === void 0 ? void 0 : responsePartner.toString().concat('');
//Type Assertion
var message = "";
//(message as string).slice();
var messageUpperCase = message;
messageUpperCase.toUpperCase();
//let canva = <HTMLCanvasElement> document.getElementById("canva");
//let canva = document.getElementById("canva") as HTMLCanvasElement;
