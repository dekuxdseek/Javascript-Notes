// control flow - loops and conditionals

// for loop

for(let i =0; i<9; ++i)
{
    console.log(i);
}

const names = ['shaun', 'jummy', 'hakn'];

for(let i = 0; i < names.length; ++i) {
    // console.log(names[i]);
    let html =`<div>${names[i]}</div>`;
    console.log(html);
}


let i = 0;

while(i < 6)
{
    console.log('from while loop ',i++);
}


let j = 0;

while(j<names.length)
{
    console.log(names[j]);
    ++j;
}

// swtich case


const grade = 'B'



// switch does strict quality check

switch(grade)
{
    case 'B': 
        console.log("grade is B");break;

    case 'C': 
        console.log("grade is C");break;
    
    case 'D': 
        console.log("grade is D");break;
    default:
        console.log("default grade!!!");break;
}


// variables and block scope

let age = 30;


if(true)
{
    let age = 40;
    // age++;
    let name = 'swastik inside if'
    console.log("inside if ", name);
    console.log("inside if " , age);
}

console.log("outside if ", age);
// console.log("inside if ", name);