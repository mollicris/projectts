interface PersonInterface{
    name:string,
    code : string | number,
    charge :number,
    description? : string,
    sayHello: () => string
}

class PersonClass{
    sayHello(){
        console.log("");
    }
}

const personTwo = new PersonClass();
personTwo.sayHello();

interface PetInterface{

    sayHello: () => string;
}

class PetClass{
    sayHello(){
        return "Hola";
    }
}

class Dogs implements PetInterface{
    //sayHello: () => "Hola desde Dog";
    sayHello(){
        return "Hola desde Dog";
    }
}

class Cat extends PetClass{}