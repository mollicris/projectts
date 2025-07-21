// interface Pet{
//     name:string;
// }

// class Dog{
//     name:string;
// }
// let pet:Pet;
// pet = new Dog();

//Case 2
// interface Pet {
//     name: string;
// }

// let pet: Pet;

// let dog = {name:"Rex",owner:"John"};
// pet= dog; // This works because dog has at least the properties of Pet
// console.log(pet.name); // Output: Rex

// interface Pet {
//     name: string;}

// let dog = {name:"Rex",owner:"John",age:5};
// function greet(pet: Pet) {
//     console.log(`Hello, ${pet.name}`);
// }
// console.log(dog);

//Case 4
// enum Status {
//     Ready,
//     Waiting,
// }

// enum Color{
//     Red,
//     Green,
//     Blue,   
// }

// let stat = Status.Ready;
// stat = Color.Red; // This is allowed because enums are compatible with each other

//Case 5
// class Animal{
//     feet:number;
//     constructor(name:string,numfeet:number){
//         this.feet = numfeet;
//     }
// }

// class Size{
//     feet:number;
//     constructor(numfeet:number){}
// }
// let a :Animal;
// let s :Size;
// a=s;
// s=a;

//Case 6
// interface Empty<T>{}
// let x: Empty<number>;
// let y: Empty<string>;
// x = y; // This is allowed because Empty<T> is a generic type and can be assigned to another Empty type with a different type parameter
// // Case 7
// interface NotEmpty<T> {
//     value: T;
// }
// let a: NotEmpty<number>;
// let b: NotEmpty<string>;
// a = b; // Error: Type 'NotEmpty<string>' is not assignable to type 'NotEmpty<number>'