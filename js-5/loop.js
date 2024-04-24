// for - 
/**
 * 1. we first initialize the variable i to 0.
 * 2. then we give the condition
 * 3. then we increment the value of i by 1
 */

for (let i = 0; i <= 10; i++) {
  const element = i;

  console.log(element);
}

for (let k = 0; k <= 100; k++) {
  const element = k;
  if (element == 50) {
    console.log("Fifty");
    
  }
console.log(element);
}

for (let i = 0; i < 10; i++) {
  console.log(`outerloop ${i}`);
  for (let k = 0; k < 10; k++) {
    console.log(`inner loop ${k} and loop ${i}`);
    
  }
  
}
// print odd numbers between 100-200

for (let i = 100; i <= 200; i++){
  const element = i
  if (element % 2 !==0) {
    console.log(`odd number ${element}`);
  }
 
}


// print even numbers between 100-200

for (let j = 100; j <= 200; j++) {
  const element = j
  if (element % 2 == 0) {
    console.log(`even number ${element}`);
    
  }
  
}
//  above examle shows that outer loop runs 10 times and inner loop runs 10 times for each outer loop

// lets take example of array 
let myArray = ['a','b','c','d','e','f','g','h','i','j']
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}
// as we know that array index start from 0 


// break and continue in loop

for (let f = 1; f < 25; f++) {

  if (f == 7){
    console.log(`detected 7 breaking the loop `);
    break
  }
  console.log(`value of f is ${f}`);
  
}