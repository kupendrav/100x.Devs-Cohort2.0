// objeect literals
const mySymbol = Symbol('mySymbol');

const myinfo = {
  name: "kupendra",
  age:20,
  [mySymbol]:"mySymbol value",
  location: "bangalore",
  job: "developer",
  mobileNo: 1234567890,
}
console.log(typeof(myinfo.mobileNo));

// how to use symbol data type in object

// define the symbol key first and then use it in object
// we can change the value in the object by simply = 
myinfo.name = "kupendra kumar";
console.log(myinfo);

// we can freeze the object so that we can't change the value of the object properties using dot notation or bracket notation

Object.freeze(myinfo); // this will make the whole object immutable

myinfo.name = "harshavardhana"
console.log(myinfo);