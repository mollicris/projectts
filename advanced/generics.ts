interface MyInterface<T>{
    field: T,
}

// Exmaple with class

interface UserResponse{
    id:number,
    name:string
}

class HttpResponse<T>{
    data:T;
    status:number;
    code:number

    constructor(data:T,status:number,code:number){
        this.data=data,
        this.status=status,
        this.code=code
    }
}

const fetchUser = ():UserResponse =>{
    return{
        id:1,
        name:"Raquel"
    }
}

const myUser = fetchUser();
const resp = new HttpResponse(myUser,200,2);
console.log(resp);

class CRUD<T>{

    private items: T[];

    constructor(items : T[]){
        this.items = items
    }

    addItem(item: T){
        this.items.push(item);
    }

    removeLastItem(){
        this.items.pop();
    }

    printItems() : T[]{
      return this.items;   
    }
}

const users: UserResponse[] =[
    { id:1, name: "Kevin"},
    { id:2, name: "Raiza"},
    { id:3, name: "Paola"},
]

const userCRUD:CRUD<UserResponse>= new CRUD(users);
userCRUD.addItem({id:5,name:"Codigo Facilito"});
console.log(userCRUD.printItems());




/*
interface UserResponseHttp{
    data:UserResponse,
    status:200,
    code:1
}

interface TaskResponse{
    data:TaskResponse,
    status:200,
    code:1
}

*/



/*
class MyClass<T>{
    field : T

    constructor(field:T){
        this.field = field;
    }
}

const myObject: MyClass<number> = new MyClass(5);

function getData<T>(id:string): Promise<T> | void{

}
/*

/*
interface Example{
    id:number,
    name:string
}



const myValue : MyInterface<number> = {
    field:5
}

const myValue2 : MyInterface<Example> = {
    field: { id :5 ,
            name :"juan"
        }
    }

    */
