arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const num of arr) {
  console.log(`number is ${num}`);
}


const bhai = 'kaise ho bhai!'
for (const b of bhai) {
  console.log(`bhai is ${b}`);
}

// ****** Maps ******
/**
 * The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
 */

const myMap = new Map()
myMap.set('name', 'John')
myMap.set('age', 30)
myMap.set('city', 'New York')
console.log(myMap)


// applying for of loop on map

for (const [key,value] of myMap) {
  console.log(key,'=>',value);
  
}

// applyin for in loop on objects

const myObj = {
  name: 'John',
  age: 30,
  city: 'New York', 
  hobby: 'video games'
}

for (const key in myObj) {
  console.log(`${key} => ${myObj[key]}`);
}

// applying for in loop on array

const myArray = ['a','b','c','d','e','f','g','h','i','j']

for (const index in myArray) {
  console.log(myArray[index]);
  
}
/**
 * map is non iterable object so we can not use for in loop on map
 */