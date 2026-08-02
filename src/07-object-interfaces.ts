/** 
 * // it is used to give type to object

// object Type annotations
let User:{name:string, age:number} = {
    name:"karan",
    age:25
} 

// with the interfaces
interface User{
    name:string,
    age:number,
    gender?:string //optional parameter
    readonly id:number //readonly cannot update the new value
}

let UserInfo: User = {
    name:"Kareena",
    age:30,
    id:5
}

// UserInfo.id = 6 //Error: Cannot assign to 'id' because it is read-only

// interfaces with methods
interface Product {
    name:string,
    price:number,
    getDiscount(percentage:number):number
    getName(value:string):string
}

let Details:Product = {
name: "Laptop",
price:60,
getDiscount(percentage:number):number {
    return this.price * (percentage / 100)
},
getName(value:string):string {
    return value
}
}
console.log(Details.name, Details.price, Details.getDiscount(20), Details.getName("karan"))

// // with function example
interface User {
    name:string,
   gender?:string
}

function getUser(obj:User) {
return `${obj.name} ${obj.gender}`
}
console.log(getUser({name:"karan", gender:"male"}))

// have two same name interface then they merged in one.
interface greet{
    name:string
}

interface greet{
    message:string
}

let hey:greet = {
name:"karan",
message:"Hello"
}
console.log(hey.name, hey.message)

// extending interfaces
interface cat{
    voice:string
}

interface catColor extends cat{
    color:string
}

function catinfo(obj:cat) {
console.log(obj.voice)
}
catinfo({voice:"meow"})

function cattinfo(obj:catColor) {
console.log(obj.voice, obj.color)
}
cattinfo({voice:"meow", color:"grey"})


*/

