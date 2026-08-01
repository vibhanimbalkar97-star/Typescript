// basic functions with types
// function add(a:number, b:number):number {
//  return a+b
// }
// let res=add(12, 13)
// console.log(res)

// function greet(a:string):string {
//     return (a)
// }
// let res=greet("hey")
// console.log(res)

// optional parameters
// function greet(name:string, greeting?:string):string {
//     if(greeting){
// return `${greeting} ${name}`
//     }else{
//         return `${name}`
//     }
// }
// console.log(greet("karan"))
// console.log(greet("karan", "Hello"))


// default parameters
// function multiply(a:number, b:number=5):number{
//     return a * b
// }
// console.log(multiply(5))
// console.log(multiply(5, 6))

// rest parameters === if in function has multiple parameters so used rest.
// function add(...numbers:number[]):number{
//     return numbers.reduce((total, n) => total + n, 0 )
// }
// console.log(add(1,2,3,4,5))

// arrow function
// const add = (a:number, b:number):number => a+b
// console.log(add(13,40))

// function types
// let calculate : (x:number, y:number) => number
// calculate=add
// console.log(calculate(30,40))

// void = without return keyword, only gives console.log
// const hey = (a:string):void => console.log(a)
// hey("hello")

// callback function passed as argument
// function abc(name:string, age:number, cb:(value:string) => void){
//     cb("hey")
//     console.log(name, age)
// }
// abc("karan", 25, (value:string) => {
//    console.log(value)
// })

// function abc(name:string, age:number, cb:(name:string, age:number,value:string) => void){
//     cb(name, age, "hey")
// }
// abc("karan", 25, (name, age, value)=> {
//  console.log(name, age, value)
// })