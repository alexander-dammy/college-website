let p = new promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('sucess')
    } else{
        reject('failed')
    }
})





p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) =>{
    console.log('This is the then ' + message)
})