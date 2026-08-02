// Type assertion(as)
let someValue: unknown = "hello"
// let strLength:number = someValue.length //error
let strLength:number = (someValue as string).length
            //   or
let strLength2:number = (<string>someValue).length