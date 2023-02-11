// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc( (value) =>{
//     //do something
//     console.log(value);
// });


// const logPerson = (person,ind) =>{
//     console.log(person, ind+1);
// }


// 

// people.forEach(logPerson);





// let callback = (person, ind, arr) => {
//     arr[ind] = 98;
//     console.log(`${person} ${ind}: ${arr}`);
// }


// people.forEach(
//     (person, index) =>
//     {
//         // console.log(`${person} at position ${index}`);
//     }
// );


// get a refrence to the 'ul'

const ul = document.querySelector('.people-random');
const people =['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach((person) =>{
    //create html template
    html += `<li style="color:purple";>${person}</li>`
});

console.log(html);
ul.innerHTML = html;