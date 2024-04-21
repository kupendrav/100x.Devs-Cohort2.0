let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());

// Date is OBJECT in js
// moth in js start from 0 

// creating new date
let myCreateDate = new Date(2024,0,29)
console.log(myCreateDate.toDateString());

// creating a date and displaying it in a specific format
let newDate = new Date();
console.log(newDate.toLocaleString('default', {
  weekday: 'long',
}));

// 1. Date.now() - gives the current date in milliseconds
// 2. new Date() - gives the current date and time

// geting day of the week
let today=new Date().getDay();
switch (today){
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}