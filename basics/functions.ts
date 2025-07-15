const sayHi = (name) =>{
    return (`Bienvenidos: ${name}`);
} 

console.log(sayHi("A Todos"));

function sayGoodBy(name){
    console.log(`Adios ${name} casi terminamos en curso`);
}

sayGoodBy("Estudiantes ");

interface ResponseServiceCD{
    id: number,
    name : string,
    charge : string,
    number : number
}

const response : ResponseServiceCD = {
    id: 1,
    name : "Codigo facilito",
    charge : "Developer",
    number : 2
}

function show({name, ...other} : {id,name,charge,number}): number{
    console.log("El nombre enviado es: ",name);
    console.log("Otros datos: ", other);
    return 1;
}

show(response);

