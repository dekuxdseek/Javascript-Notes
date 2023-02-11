// to mkae our block of code reusable





// function expression  -> they needs to be declared before calling them bc, they are not hoisted at top
const speak = function(){
    console.log('good day');
};




// hoisting works for only js functions and not js expressions
// greet();     function can be declared after calling it -> it is bc javascript uses hoisting-> which is functions are hoisted at the top of file, before all block of code    
// greet();

speak();        // function expression needs to be declared before it is called 



// for good coding practice: try to use expression(which are not hoisted), so that function declarations and their calling don't get jumbled up




// function declaration  

function greet()
{
    console.log("hello there");
}


