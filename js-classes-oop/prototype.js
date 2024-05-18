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
sweetTase.kupendra()