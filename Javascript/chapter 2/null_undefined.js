

// null and undefined is js
// null means nothing, void, emptiness
// and is intentionally setInterval

// undefined means that continer exists 
// but hasn't been defined a value yet
// functions with no return statement
// will return undefined by default

console.log(typeof null);   // object
console.log(typeof undefined);  // undefined

console.log(null === undefined);  // false
console.log(null == undefined); //true

console.log(null === null); //true
console.log(null == null);  //true
        
console.log(undefined === undefined);   // true
console.log(undefined == undefined);    //true

// console.log(!null);     //true
// console.log(isNaN(1 + null));   //false
// console.log(isNan(1 + undefined));  //true


// let age;
// console.log(age);   //undefined

// function abc()
// {
//     // nothing here
//     return null;
// }

// console.log(abc());







// == (loosely equality)-> compares operands after type coersion(only value and not type), i.e. compares them after converting them to same type
// === (strictly equality) -> compares operands for both, their value and type


console.log( 5 == '5');     //true
console.log(5 === '5');     //false

console.log(true == '1');    //true
console.log(true === '1');   //false


console.log('null == false? ', null == false);  //false
console.log(undefined == false)   //false
console.log(null == undefined) //true
console.log(null === undefined) //false

// null is equal to undefined, but not identical
// undefined variable -> it doesn't exist
// null variable -> it is empty

// console.log(isNaN(2+null)); //false
// console.log(isNan(2 + undefined));  //true

//null is referred as false
// undefined is a global property


let arr = [1,2,3,4,5];

if(arr[5] === undefined)
{
    console.log('it does not exist');
}
else 
{
    console.log('it exists');
}



let age = null;
console.log("age: ", age);

let va;
console.log("va-not-null: ", va);