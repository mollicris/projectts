namespace DataBaseEntity{
    
    export class User{
        constructor(public name:string){

        }
    }

    const myUser = new User("Cris");
    console.log(myUser);


}

const muOtherUser = new DataBaseEntity.User("Julian");
console.log(muOtherUser);
