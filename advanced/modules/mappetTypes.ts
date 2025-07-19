interface Person {
    name:string,
    age:number
}


// interface getPerson{
   // getName : ()=> string,
   // getAge : () => number
// }

interface Animal {
    id:number,
    name:string,
    type:string,
    isAdopted:boolean
}

type Getter<T> = {
    [Property in keyof T as `get${Capitalize<string&Property>}`] : () => T[Property]
}

type getPerson = Getter<Person>;

type getAnimal = Getter<Animal>;