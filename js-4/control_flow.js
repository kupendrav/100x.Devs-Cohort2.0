// if 

//  = is used to assign the value to a variable
//  == is used to compare the value
//  === is used to compare the value and the type of the variable

// conditional operators = , == , === , != , !== , > , < , >= , <=
const userDetail = {
  name:'halwa',
  age: 20,
  salary: 20000
} 
if (userDetail.name == 'halwa'){
  console.log( `Welcome ${userDetail.name} here is your details `,userDetail);
}

const salary = 1000
if (salary == 100000){
  console.log('You are a millionaire');
}

// implicit scope => assuming the scope exists
if (salary==100000) console.log('You are a millionaire');

if (salary >= 1000000) console.log('You are a millionaire');
else console.log('You are not a millionaire');


if (salary < 500){
  console.log('You are poor');
}else if (salary < 1000){
  console.log('You are middle class');
} else if (salary < 10000){
  console.log('You are upper middle class');
}else if(salary < 100000){
  console.log('You are rich');
}else{
  console.log('You are a millionaire');
}


// logical operators - && , || , !

const userLog = true
const debitCard = true

if(userLog && debitCard){
  console.log('You can withdraw money');
}


const userLogInTwitter = false
const userLogInGoogle = false

if(userLogInTwitter || userLogInGoogle){
  console.log('You can log in');
}else{
  console.log('You can not log in');
}