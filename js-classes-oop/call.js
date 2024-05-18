function giveUserName(username){
    this.username = username
    console.log("called");
}

function createUser(username , email ,pass){
    giveUserName.call(this,username)

    this.email = email
    this.pass = pass
}

const chai = new chai("chai","chai@abc.com",123)
console.log(chai);