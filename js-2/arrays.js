const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// to access any value inside the array we use the index of the value. In JavaScript, arrays are zero-indexed, meaning the first element is at index 0, the second element is at index 1, and so on.

console.log(myArr[0]); 

// Array  methods

// 1. push() - adds an element to the end of an array and returns new length of the array

// myArr.push(3);
// console.log(myArr);

// 2. pop() - removes the last element from an array and returns that element

myArr.unshift(0); // add at the beginning of the array

console.log(myArr.includes(0)); // checks if there is a zero in the array
console.log( myArr);

// slice - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.


// splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.