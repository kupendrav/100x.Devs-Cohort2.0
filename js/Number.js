const score = 26.9845;
console.log(score.toPrecision(3)); // 26.9
const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-UK'));  // 100,000,000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,00,000
// ++++++++++++++------------------++++++++++++++++++++++++

//  properties are that we directly acces by . notation
//  methods are that we call by () notation

// MATHS ---------------------->
console.log(Math.floor(3.9)); // 3
console.log(Math.ceil(3.1)); // 4
console.log(Math.round(3.5)); // 4

console.log(Math.random()); // 0.0 to 0.9999999999999999 (not inclusive)
let randomNumber = Math.floor(Math.random() * 10) + 1; // 1 to 10

const max = 10;
const min = 1;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);