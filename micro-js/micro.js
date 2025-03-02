const accountId = 1999;
let accountEmail = "abc@fmail.com"
var accountPassword = '1234';

accountCity='banglore';
console.table([accountId,accountEmail,accountPassword,accountCity]);
// there is something called ecma standard 
// types of variable let and const 
// types of variables =
/** .1.number
 * 2.string
 * 3.boolean
 * 4.null
 * 5.undefined
 * 6.symbol
 */

/** conversion of data types */

let x = "10abc";
console.log(typeof x);

let valueInNumber =  Number(x);
console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(+true);
console.log(+"");

//comparision
console.log(3>2);
console.log(null > 0);
// comparison is diiferent from equality 

/** primitive
 * 7 types of primitive data types
 * 1.string
 * 2.number
 * 3.boolean
 * 4.null
 * 5.undefined
 * 6.symbol
 * 7.bigint
 
 * non primitive or reference data types
 * 1.object
 * 2.array
 * 3.function
 * 4.date
 * 5.regular expression
 * 6.map
 * 7.set
 */
const score = 100;
const scoreValue = 100.3;
