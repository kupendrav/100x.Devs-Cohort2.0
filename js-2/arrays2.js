const mySweets = ["halwa","laddoo","jalebi","gulab jamun","barfi","rasgulla","peda","kaju katli"]

const myFruits = ["apple","banana","mango","orange","grapes"]
// const allItems = mySweets.concat(myFruits);
// console.log(allItems);

const allFruitsSweets = [...mySweets, ...myFruits];  //using spread operator to combine the arrays
console.log(allFruitsSweets);