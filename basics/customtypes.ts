type Person ={
    name:string,
    code: string | number,
    descrption? : string
}

const newPerson = {
    name:"Cris",
    code:"1"
}

type ServiceResponse = string|null|number|undefined;

let response: ServiceResponse;
response = "12";

type UserCharges = "admin"|"normal"|"superUser";

let myUserType:UserCharges = "admin";