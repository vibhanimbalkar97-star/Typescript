// generics = <T>
// generic functions
// generic interfaces
// generic classes

// generic functions = if we use any and unknown, we cannot see the methods or intelligence after ., means a.length like this. so we use generics.
function greet<T>(arg:T) {
    console.log(arg)
}
greet("Hello")// ts inference/ samja jati hai call karte waqt kar leti hai type
greet<number>(26)


// one issue with generics
function abcd<T>(a:T):T {
    return a // work
    // return "hi" //gives error bcz it is called string literal and it is not equal to T
    // return "hi" as T // this is solution type assertion for that
    // return <T>"hi"second way writing type assertion
}
console.log(abcd<string>("hello"))




// generic interfaces
interface userDetails<T> {
    name:string,
    age:number,
    key:T
}

function details(obj:userDetails<string | number>) {
console.log(obj.name, obj.age, obj.key)
}

details({name:"Karan", age:20, key:"abcd"})
details({name:"Karan", age:20, key:12})

// has two values
interface KeyValuePair<K, V> {
    key:K,
    value:V
}
let stringOrNumber:KeyValuePair<string,number>={
    key:"age",
    value: 34
}
console.log(stringOrNumber.key, stringOrNumber.value)

// has object inside
interface KeyValuePair1<K,V> {
  key:{
    name:string,
    key:K
  },
  value:V
}

let stringOrNumber1 = {
    key:{
        name:"kareena",
        key:"isFamous"
    },
    value: true
}
console.log(stringOrNumber1.key.name, stringOrNumber1.key.key, stringOrNumber1.value)




// generic classes
class ProductList<T>  {
    constructor(public name:T){}
}
let ab = new ProductList("iron")
let bc = new ProductList<number>(5)
console.log(ab, bc)



class DataStorage<T> {
   private data:T[] = []

   addData(value:T):void{
    this.data.push(value)
   }

   removeData():void{
     this.data.pop()
   }

   getData():void{
    console.log([...this.data])
   }
}

let textStorage = new DataStorage<string>()
textStorage.addData("Hello")
textStorage.addData("World")
textStorage.removeData()
textStorage.getData()
console.log(textStorage)


// Generics with arrays
function getItems<T>(arr:T[]):T{
    return arr[0]
}
let res2 = getItems(["abc", "trg"])
let res3 = getItems([10,20,30,40,50])
console.log(res2, res3)



// Generic constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK
// logLength(123); // Error: number doesn't have length
