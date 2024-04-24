let to = 5
while (to <= 30) {
  console.log(`value of to ${to}`);
  to = to + 2
}

let myHero = ['hero1','hero2','hero3','hero4']
let arr = 0
while (arr < myHero.length) {
  console.log(`value is ${myHero[arr]}`);
  arr = arr + 1
}
// while loop is same as if() 
/**
 * we inc or dec the value after print
 */


let val = 1
do {
  console.log(`score is ${val}`);
  val++
} while (val<=25);

// draw back of do while loop is first it will execute and then it checks for condition 