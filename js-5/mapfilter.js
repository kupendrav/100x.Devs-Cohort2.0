const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myNewNum = myNum.filter((num) => (num> 9))
console.log(myNewNum); 

// const myNewNum = myNum.forEach((num) => {
//   num> 9
//   return num
// })
// console.log(myNewNum);

//  above example shows that we cant return the value in for each method

/**
 * fopr returning the value we can use map method
 */

const myNewNum1 = []

myNum.forEach((num)=>{
  if(num>9){
    myNewNum1.push(num)
  }
})
console.log('Using ForEach: ', myNewNum1);

/**
 * above example shows how to get values by using for each method
 */

const myBooks = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    publish: 1988,
    edition : 2022
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    publish: 1997,
    edition : 2023
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    publish: 2003,
    edition : 2024
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R  Tolkien',
    publish: 1937,
    edition : 2005
  },
  { 
    title: 'The Lion, the Witch and the Wardrobe', 
    author: 'Clive Staples Lewis', 
    publish: 1955, 
    edition: 2016
  }
]

const myNewBooks = myBooks.filter((bk)=>(bk.publish > 2000))
console.log(myNewBooks);

// lets see how map works

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNewNumbers = myNumbers.map((num)=>(num*2))
console.log(myNewNumbers)

// **** chaining the methods ****

const myHum = myNumbers
              .map((num)=>(num*10))
              .map((num)=>(num + 5))
              .filter((num)=>(num>50))
              
console.log(myHum);