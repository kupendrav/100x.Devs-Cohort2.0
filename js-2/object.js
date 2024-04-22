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
