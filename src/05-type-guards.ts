function isString(value:unknown):value is string {
return typeof value === "string"
}
console.log(isString(12))//false
console.log(isString("46"))//true


function processValue(value:string | number): void {
    // type guards
    if (typeof value === "string"){
        console.log(`String : ${value.toUpperCase()}`)
    } else {
        console.log(`Number: ${value.toExponential()}`)
    }
}
processValue("abc") //ABC
processValue(5) //5e+0

// instanceof type guard = uses in object and classes
class Dog {
    bark() {
    console.log("woof")
    }
}

class Cat {
    meow() {
        console.log("Meow")
    }
}

function sound(animal:Cat | Dog):void{
    if (animal instanceof Dog){
        animal.bark()
    } else {
        animal.meow()
    }
}
// Note: instanceof always checks objects (instances), not the class itself.
// so we need to create instance(object) with new keyword then we can see output. class is only blue print.

// instance creation
let dog = new Dog()
let cat = new Cat()
dog.bark()
cat.meow()

