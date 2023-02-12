// object literals

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac and cheese rules', '10 things  to make with  amrita']
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// user.name = 'swastik';
// console.log(user.name);
// console.log(user['age']);

// user['name'] = 'sidisgreat';
// console.log(user[name]);


// objects methods

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    // an array of objects
    blogs:[
        {title: 'why mc rules', likes: 30},
    
        {title: '10 things to make with marmite', likes: 50},
    
        {title: 'why i dont like to wake up late', likes: 99}
    ],
    login: function(){
        console.log('user logged in!')
    },
    logout() {
        console.log('user logged out!');
    },
    // using arrow function won't let this access the user fields, and this will have global value, i.e window object
    logBlogs(){
        console.log('This users have the following blogs:');
        this.blogs.forEach((blog_name) =>{
            console.log(`${blog_name.title} has ${blog_name.likes} likes`);
        })
    }
};


// user.login(); // it is a function , defined on an object
// user.logout();

// user.name.toUpperCase();

console.log(this);  // for global scope, "this" returns window object
user.logBlogs();







