// type conversion
let score = '100';

console.log(score+1);   //rather than addition , it concatenates to the string

score = Number(score);
console.log(score+1);

console.log(typeof score);  //returns type of variable

// let result = Number('hello');   //NaN

// let result = String(85645);     //string

let result = Boolean(10);
console.log(result, typeof result);