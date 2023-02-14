function add(num1 , num2){
    return num1 + num2;
}

console.log(add(3,4));

function multiply(num1,num2){
    return num1 * num2; 
}

console.log(multiply(3,4));

function cal(num1,num2,operator){
    return operator(num1,num2);
}

console.log(cal(3,4,add));
console.log(cal(3,4,multiply));


// higher order functions: these are functions who takes functions as parameters
// anonymous functions are functions without names, and just their definition, like the one below









// calculator
function add(num1, num2){return num1 + num2;}
function subtract(num1,num2){return num1-num2;}
function multiply(num1,num2){return num1*num2};
function divide(num1,num2){return num1/num2;}
function calculator(num1,num2, operator){return operator(num1,num2);}
calculator(4,7,add);
calculator(4,7,subtract);
calculator(4,7,multiply);
calculator(4,7,divide);