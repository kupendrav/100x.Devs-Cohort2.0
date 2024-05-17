const promiseOne = new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("code is executed");
    resolve();
},1000)

})

promiseOne.then(()=>{
    console.log("promise consumed");
})

const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"chai", email:"abc@gmail.com"})
    },1000)
})

promiseTwo.then((user)=>{
    console.log(user);
})