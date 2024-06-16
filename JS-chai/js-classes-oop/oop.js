const user = {
    username :"halwa",
    loginCount: 10,
    signedOut: true
}
console.log(this);

function User(username, loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("hitesh",3,true)
const userTwo = new User("chai bhai",6,false)

console.log(userOne);

/**overites the value of userone though usertwo is not printed 
 * if new keyword is not used
*/

/**
 * In JavaScript, the new keyword is used to create an instance of an object that is defined by a constructor function or a class. It performs several important operations that initialize the new object and establish its prototype chain. Here's a detailed breakdown of what happens when you use the new keyword:
 */