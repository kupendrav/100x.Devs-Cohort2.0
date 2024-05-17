const user = {
    username :"halwa",
    loginCount: 10,
    signedOut: true
}
console.log(this);

// function User(username, loginCount , isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;

//     return this
// }

// const userOne = User("hitesh",3,true)
// const userTwo = User("hitesh",3,true)

// console.log(userOne);

/**overites the value of userone though usertwo is not printed */