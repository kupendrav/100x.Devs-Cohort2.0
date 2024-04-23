// IIFE - Immediately Invoked function Expressions
// y iife is used?
/**
 * 1. To avoid polluting the global scope with variables and functions, which can lead to conflicts and bugs.
 */


// named iife
(function chai(){
  console.log("DB executed");
})();

// this immediate invoked function dont no when to stop executing so we end the should use ' ; ' at the end of the function

// unnamed iife
( ()=>(console.log('DR EXECUTED')))();

((name)=>{
  console.log(`DR EXECUTED ${name}`);
})('kupendra');

// above example shows that we can pass the arguments to the iife function and execute the function immediately