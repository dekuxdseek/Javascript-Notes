// based on how they are stored

// primitive dts are stored in stack, faster and smaller
// referece types are stored in heap, slower and bigger

// primitive types: nums, strinsg, bool, null, undefined, symbols

// reference types: all types of objects(object literals, arrs, fns, dates , etc)


// the way referece types are stored in heap is similar to cpp,(dynamic memory allocation)



// primitive types
let scoreOne = 40;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne} and scoreTwo: ${scoreTwo}`);

scoreOne = 80;

console.log(`scoreOne: ${scoreOne} and scoreTwo: ${scoreTwo}`);



// reference types
let userOne = ['swastik' , 7.7 , 80];
let userTwo = userOne;

console.log(`userOne: ${userOne} and userTwo: ${userTwo}`)

userOne[0] = 'puneet';
console.log(`userOne: ${userOne} and userTwo: ${userTwo}`)

// could be done with key-pair object , but should be done with accessing and then changing it.Otherwise, new obj is made in heap, and it starts pointing it.

