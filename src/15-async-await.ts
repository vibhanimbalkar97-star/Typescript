// Promise
function getResponse(id:number):Promise<{id: number; name:string}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id, name:"ABC"})
        }, 1000)
    })
}
console.log(getResponse(1))