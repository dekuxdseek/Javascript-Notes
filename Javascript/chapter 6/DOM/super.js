document.querySelector('h1').classList.toggle('huge');



// manipulating text inside given selector

// selecting text inside html element: innerHTML
document.querySelector('p').innerHTML = 'inner';
document.querySelector('p').textContent = 'outside is hot';


document.querySelector('#strong').innerHTML = 'sid';          // returns elements and texts inside the given selector
document.querySelector('#strong').textContent = 'sike';         // returns only text inside the given selector

document.querySelector('#strong').innerHTML= '<b>sid</b';         //executes the html code too
document.querySelector('#strong').textContent = 'sike';          // doesn't executes the html code


// manipulating html element attributes -> these are everything in element tag, except element, which are properties of element
let ans = document.querySelector('li a');
console.log(ans);

let attans  = document.querySelector('li a').attributes;
console.log(attans);

let attributeName = document.querySelector('li a').getAttribute('href');
console.log(attributeName);

document.querySelector('li a').setAttribute('href', 'www.bing.com');

let attributeName2 = document.querySelector('li a').getAttribute('href');
console.log(attributeName2);

