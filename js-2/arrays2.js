const mySweets = ["halwa","laddoo","jalebi","gulab jamun","barfi","rasgulla","peda","kaju katli"]

const myFruits = ["apple","banana","mango","orange","grapes"]
// const allItems = mySweets.concat(myFruits);
// console.log(allItems);

const allFruitsSweets = [...mySweets, ...myFruits];  //using spread operator to combine the arrays
console.log(allFruitsSweets);

const another_array = [1,2,3,[4,5],6,7,[8,[9,10]]]
let flatArray = another_array.flat(Infinity);
console.log(flatArray); // flat method is used to flatten the array to the specified depth. Infinity is used to flatten the array to any depth.

console.log(Array.from('kupendra'))
// from method is used to create a new shallow-copied Array instance from an array-like or iterable object. It makes it easy to convert other data structures like strings and objects into arrays.

console.log(Array.from({name: "kupendra"}))
  
// of method is used to create a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

let n1 = 100
let n2 = 200
let n3 = 300

console.log(Array.of(n1,n2,n3))