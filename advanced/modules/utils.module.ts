export const PI = 3.14;

export interface User{
    id:number,
    name:string
}
export const generatyId = () =>{
    return Math.floor(Math.random() * 100);
}