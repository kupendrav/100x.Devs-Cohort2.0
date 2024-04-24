
// falsy values 
// 0, null, undefined, NaN, false, '',bigInt 0n
// truthy values
// anything except for the above falsy values , "0", "false","  ",[],{},function(){} 

userEmail=[1,2]
if(userEmail.length === 0){
  console.log('array is empty');
}else{
  console.log('array is not empty');
}

const emptyObj = {1: ' '}
if(Object.keys(emptyObj).length === 0){
  console.log('object is empty');
} else{
  console.log('object is not empty');
}

// nullish coalescing operator ?? => it checks for the null or undefined values

let check ;
// check = null ?? 10;
check = undefined ?? 12;
console.log(check);   // output

// terniry operator

// conditon ? true : false;

const iceTea = 10;
iceTea > 5 ? console.log('You are a tea lover') : console.log('You are not a tea lover');