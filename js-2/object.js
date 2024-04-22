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

// Object.freeze(myinfo); // this will make the whole object immutable

myinfo.name = "harshavardhana"
console.log(myinfo); 

// *********************************
// functions 

myinfo.greeting = function(){
  console.log(`hello, I am ${this.name} and I am ${this.age} years old`);
}
// this is used to access the object properties using 'call' method
console.log(myinfo.greeting());

// *********************************

// ************* part-2 *************

/**
 ! Obects can be declared using two ways :
 - Using literal syntax (object literals)
 - Using constructor function (Object())

 singleton - const myinfo = new Object();
 non-singleton - const myinfo = {};
 */

//  if we want merge the number of objects we use assign method
const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const person2 = {nickname:"Johny", age:30, eyeColor:"green"};

let mergedPerson = Object.assign({},person1, person2);
/**we dont use above method much */
// we can also merge the object using spread operator
mergedPerson = {...person1, ...person2};
console.log(mergedPerson);

console.log(Object.keys(myinfo));
console.log(Object.values(myinfo));
// most important method to get the entries of the object


// to check wewther the object has the property or not , we use in keyword . it returns true or false 

console.log(myinfo.hasOwnProperty('name'));


// ************* part-3 *************

// we can destructure the object using the following method when we are working in react platform

const product = {
  nameOfTheProduct: "laptop",
  price: 50000,
  stock: 10,
  rating: 4.5
}

const {nameOfTheProduct : name} = product;
console.log(name);``