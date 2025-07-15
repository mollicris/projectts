type Person = {
    name:string,
    age: number
}

interface Employe extends Person{
    charge:string;
}

const newEmploye: Employe = {
    name:"Roberto",
    age:55,
    charge:"Gerente"
};

//UnionTypes

type User = {
    id:string;
}

type Admin = User & Employe;
type ServiceResponseToken = string|null|undefined|number;
type UserTypes = "admin"|"superUser"|0;


//Puede existir 2 interfaces con el mismo nombre pero diferentes props

interface Developer {
    name :string,
    stack: string[]
}

interface Developer{
    phone: number
}

