

// Number 3,4,66, 7.8
// String  'hello, world' "swastik@gmail.com"
// Boolean
// Null -> variable has no value (set explicitly)
// Undefined -> for undefined variables
// Object -> Complext data structures - Arrays, Dates, Literals etc
// Symbol -> used with objects



// strings
console.log('swastik');
let str = " is learning javascript!!!"
console.log(str);

// string concatenation
let f_name = "Swastik";
let l_name = "Sharma";

let full_name = f_name +" " + l_name;

console.log(full_name);

// getting characters
console.log(full_name[4]);

// string length
console.log(full_name.length);

// String methods
// function -> snippet of code that performs particular task; method -> it is a function that is associated with a particular object/class
console.log(full_name.toUpperCase());

let lower_full_name = full_name.toLowerCase();
console.log("LowerCased name is ", lower_full_name);

let index = str.indexOf('g');
console.log(index);