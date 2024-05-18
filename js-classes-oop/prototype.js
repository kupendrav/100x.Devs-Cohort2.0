let mySweets = ["laddu","jahangir","kaajukatli","burfi"]

let sweetTase = {
    laddu:"good",
    burfi:"extra good",

    kaajukatli:function(){
        console.log(`Spidy power is ${this.kaajukatli}`);
    }
}
Object.prototype.kupendra = function () {
   if (false) {
    console.log(`is not present`);
   } else {console.log(`kupendra is present`);}

}
Array.prototype.hellokupendra = function(){
    console.log(`kupendra says hello`);
}
// sweetTase.kupendra()
mySweets.kupendra()
mySweets.hellokupendra()


/**++++++++++++++ inheritance  ++++++++++++++*/

let anotheName ="chai our bhai    "

// console.log(anotheName.length);

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotheName.trueLength()
"good                   ".trueLength()