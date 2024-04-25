const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce(function(acc,currval){
  console.log(`acc: ${acc}, currval: ${currval}`);
  /**
   * acc: 0, currval: 1
acc: 1, currval: 2
acc: 3, currval: 3
acc: 6, currval: 4
acc: 10, currval: 5
   */
  return acc + currval;
},0)
console.log(myTotal);

/**
 * i have given initial value as 0
 * acc= accumulator
 * curval = current value
 */

const myTotal1 = myNums.reduce((acc,currval)=>(acc + currval),0)
console.log(myTotal1);



/**
 * below we are calculating the total amount of the shopping cart
 * each item is an object with a name and price property
 */

const shoppingCart = [
  {
    product: 'phone',
    qty: 1,
    price: 699
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 9.98
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20.99
  }
]

const totalAmount = shoppingCart.reduce((acc,item)=>(acc + item.price*item.qty),0)
console.log(totalAmount);