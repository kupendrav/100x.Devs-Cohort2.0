function myNewNumber(num1,num2){
  // console.log(`adding ${num1} and ${num2} gives ${num1+num2}`);

  let result = num1 + num2;
  return `The sum of ${num1} and ${num2} is ${result}`;
}

const result = myNewNumber(4,5);
console.log("result",result);

// ************ Default Parameters ************
function myNewName(name = "John"){
  return`my name is ${name}`
}

let name = myNewName('halwa')
console.log(name);