// number enum
enum Direction {
Up=1, //initilize here below is come as 2,3,4 it is automatically know the flow
Down,
Left,
Right
}

let Arrow:Direction = Direction.Up

// string enum
enum Status5{
    pending="PENDING",
    loading="LOADING",
    success="SUCCESS"
}
let statusCode5:Status5 = Status5.success

// const enum (more performant)
const enum HttpStatus {
    Ok = 200,
    unauthorized = 401,
    badrequest = 400,
    notFound=404
}

function handleStatus(status:HttpStatus):void{
    if(status === HttpStatus.Ok){
        console.log("Success")
    }
}
