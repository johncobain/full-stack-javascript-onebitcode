const a = 0;
const b = null;
const c = 'Teste';

console.log(a||b||c);
console.log(a??b??c);


let aa = 0;

let bb = aa || 42;
console.log({aa, bb});

bb = aa??42;

console.log({aa, bb});
