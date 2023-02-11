const name = "shaun";

// functions -> invoked using f_name()

const greet = () => 'hello world';

let resultOne = greet();
console.log(resultOne);


// methods -> invoked using x.f_name() --> x is any object or a datatype, and f_name is method based on a particular object/dt
let resultTwo = name.toUpperCase();
console.log(resultTwo);
