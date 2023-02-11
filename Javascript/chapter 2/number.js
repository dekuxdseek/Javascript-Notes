let radius = 10;
let pi = 3.14;

console.log("Area of the circle is ", pi*radius*radius);

// math operators + , - , * , / , **, %
// order of operation - B I D M A S

// let input = prompt("Enter your name ");
// console.log(input);

console.log(4 * 'hello');


// template strings

const title ='Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenantion way
let concat = 'The blog called ' + title + " by " +author + " has " + likes +  " likes" ;
console.log(concat);

//template string way
let templstr = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(templstr);

//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span> This blog has ${likes} likes </span>

`;
console.log(html);
