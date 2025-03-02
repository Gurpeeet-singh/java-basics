let a = 'red';
let b = 'blue';

a = ('blue' || 'red');
console.log(a)
b = ('red'||'blue')
console.log(b)
// this is one way, another one is this

let c = a;
a = b;
b = c;
console.log(a);
console.log(b);