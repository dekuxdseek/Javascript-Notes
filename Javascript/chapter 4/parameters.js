// Arguments & Parameters

// function parametes are passed 
// const speak = function(name = 'fellow human' ,time = 'day'){
//     console.log(`good ${time} ,${name}!`);
// }


// speak('swastik', 'morning');

// speak();

// speak('puneet');



// returning values

// const Area = function(radius)
// {
//     let area = 3.14 * radius**2;
//     return area;
// };


// const Val = function(area)
// {

// };

// let r = 10;

// let a = Area(r);

// console.log(a)


// regular function
const Area = function(radius)
{
    return 3.14*radius*radius;
};

// array function
const calcArea = (radius) =>{
    return 3.14*radius**2;
};

// let r = 10;
// let ans = calcArea(r);
// console.log(ans);

const arrowArea = radius => 3.14*radius**2;

// let r = 10;
// let ans = arrowArea(r);
// console.log(ans);


// practice arrow function

// no parameter function
const great = () => 'hello world';
let result = great();
console.log(result);

// two parameter function
const bill = (products, tax =0) =>{
    let total = 0;
    for(let i =0 ; i < products.length; ++i)
    {
        total += products[i] + products[i]*tax;
    }
    return total;
}


let totalKharcha = bill( [3,7,8,9,10,2] , 0.2);
console.log(totalKharcha);
