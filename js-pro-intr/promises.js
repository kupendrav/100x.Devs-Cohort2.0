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

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if (!error) {
            resolve({username:"halwa",email:"badam@gmail.com"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

async function consumepromiseThree() {
    try {
        const response = await promiseThree
    console.log(response);
    }catch{
        console.log(error);
    }
}

consumepromiseThree()