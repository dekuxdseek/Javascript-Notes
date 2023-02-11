let ninjas = ['s' ,'w', 'u', 'y', 'i'];
console.log(ninjas[4]);

let  ages = [20,25,30,35];
console.log(ages[2]);


let mixed = ["swastik", 57, 7.8];
console.log(mixed[2]);


// array methods
console.log(ninjas.length);

let upgradedninja = ninjas.join('-');
console.log(upgradedninja[0] , upgradedninja[1]);
console.log(upgradedninja);

let index = ninjas.indexOf('u');
console.log(index);

let conc = ninjas.concat(['sh', 'p', 'v']);
console.log(conc);

let push = ninjas.push('pushed');   //returns lenght of new array, changes the original value, hence these are called destructive methods
console.log(push);
let final = ninjas.pop();   //destructive method
console.log(final);
console.log(ninjas);