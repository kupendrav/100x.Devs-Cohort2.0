// global scope and local scope or block scope {}

let a = 10
const b = 20
var c = 30

if(true){
  let a = 40
  const b = 50
  var c = 60
  // console.log('inside block',a,b,c);
}

// console.log(a);
// console.log(b);
// console.log(c);

// above example shows the drawback of using var keyword which is that it can be redeclared even outside the block scope

// so we use let and const to avoid this issue


if (true){
  const website = "www.google.com"
  if(true){
    const name = "google"
    console.log('inside block',name);
  }
  console.log('inside block',website);
}

//  above exzmple shows that the importance of scope and how it works in JavaScript is very important because it helps us avoid the redeclaration of variables and also helps us to avoid the global scope pollution


// we can acces only within the block scope and not outside the block scope
/**
 * child scope can access parent scope but parent scope cannot access child scope
 */


// *************** mini hoisting *****************

const addOne = function (num){
  return num + 1
}
console.log(addOne(10));
// above example shows that we have variable holding the function and we are calling the function before the variable declaration but  it not  works because of hoisting

console.log(addTwo(10));
function addTwo(num){
  return num + 2
}

// above example shows that we have function declaration and we are calling the function before the function declaration but it works because of hoisting