/*Simulando um Blog com Classes*/
const Author = require('./Author.js')

const john = new Author('John Dee');

const post = john.newPost('Hello World!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.');

post.addComment('Julia', 'Love it!')
post.addComment('Marcos', 'Amazing!')

console.log(john);
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
console.log(post);
