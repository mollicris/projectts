var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data,
            this.status = status,
            this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "Raquel"
    };
};
var myUser = fetchUser();
var resp = new HttpResponse(myUser, 200, 2);
console.log(resp);
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Kevin" },
    { id: 2, name: "Raiza" },
    { id: 3, name: "Paola" },
];
var userCRUD = new CRUD(users);
userCRUD.addItem({ id: 5, name: "Codigo Facilito" });
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
