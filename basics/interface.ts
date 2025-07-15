interface Person{
    name:string,
    code : string | number,
    charge :number,
    description? : string,
    sayHello: () => string
}

let person1 :Person  =
{
    name:"Kevin",
    code:"01",
    charge :1,
    description:"hola",
    sayHello:() => "hola"
};

person1.code = "50";

let otherPerson :Person = {
    name: "",
    code: "",
    charge: 0,
    sayHello:() => {
        console.log("Hola2");
        const persons = [0,1,2,3,4];
        persons.map((p)=>p.toFixed(1));
        return "";
    }
};

otherPerson.description?.toUpperCase();

