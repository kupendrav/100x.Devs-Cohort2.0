// this keyword  - The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

const me = {
  username : "john",
  price : 100,
  // value : "halwa",
  welcomeMessage : function(){
    console.log(`${this.username} welcome to our website`);
    console.log(this);
  }
}
me.welcomeMessage()
me.username = 'halwa'  // we can change the value of the object after changing again we should execute the function to get the updated value
me.welcomeMessage()
// console.log(this);


//  above example shows that the this keyword refers to the object where the function is called

// this keyword inside the function scope refers to the global object

//  this keyword outside the object scope refewrs to the empty scope
//  this keyword inside the object scope refers to the object itself

// this keyword in the brwoser refers to the window object where it will not give empty scope

// this keyword in the nodejs refers to the empty scope


function chai(){
  let username = "laddu"
  console.log(this.username);
}
chai()

// above example shows that the this keyword inside the function scope will not work and gives undefined

const chai1 = ()=>{
  let username = 'halwa'
  console.log(this);
}
chai1()

// above example shows that the this keyword inside the  chai1 executed will print the empty block scope


// *************** arrow function ***************

const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(5 , 5)); 
//  while using paranthesis we do not use return statement

const addOne = (num1,num2) =>{
  return num1 + num2
}

const userName = ()=> ({username:'kupendra'})
console.log(userName()) ;
// above example shows us the usage of arrow function without return \ by wrapping up with paranthesis