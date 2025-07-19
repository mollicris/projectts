//Partial
interface Task{
    id:number,
    name:string,
    description:string
}

function updateTask(id:number,task:Partial<Task>){
    //
    console.log();
    
}

const newTask = {name:"Ramiro"};

updateTask(1,newTask);

//Requierd<T>

interface ToDo{
    id?:number,
    name?:string
}

const myToDo:Required<ToDo> = { id:1 ,name:"a"}

//Records<Keys,Types> Para la creacion de objetos
//{id:value}

interface CatInfo{
    age:number,
    name:string
}

type CatName= "moi"|"tuf"|"are";

const cats: Record<CatName,CatInfo> = {
    moi : { age:2 , name:""},
    tuf : { age:2 , name:""},
    are : { age:2 , name:""},
}

//Pick  <T,Property>

interface Todos{
    title:string,
    description:string,
    completed:boolean
}

type TodoPreview = Pick<Todos,"title"|"completed">;

const otherTodo:TodoPreview = {title:"",completed:true}

//Omit <T,Property>

type TodoOmit = Omit<Todos,"description">;
const todoOmmited:TodoOmit = {title:"",completed:false};


