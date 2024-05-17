const promiseOne = new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("code is executed");
    resolve();
},1000)

})

promiseOne.then(()=>{
    console.log("promise consumed");
})