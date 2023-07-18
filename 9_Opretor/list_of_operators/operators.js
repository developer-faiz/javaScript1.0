// 1 - Arithmetic Operator --> +, -, *, /, %
console.log('Arithmetic Operator');
console.log('--------------------');
let a = 90;
let b = 10;
// 100
console.log(a+b); 
// 90
console.log(a-b);
// 900
console.log(a*b);
// 0
console.log('% operator')
console.log(a%b);
// 9
console.log('division / operator');
console.log(a/b);


// Assignment operator --> =
console.log('Assignment operator');
console.log('--------------------');

let assin = 10;
console.log(assin);


// Relational operator  --->  >, <, >=, <= , ==, ===
console.log('Relational operator');
console.log('--------------------');
let ra = 10;
let rb = 5;
if(ra > rb){
    console.log(a);
}else{
    console.log(b);
}

if(ra < rb){
    console.log(ra);
}else{
    console.log(rb);
}

let doo = 10;
let to = '10';
console.log(doo == to);
console.log(doo === to);


// Logical operator  ---> &&, ||, !
console.log('Logical operator');
console.log('--------------------');
let c = 40;
let d = 30;
let e = 10;
if(c>d && c>e){
    console.log('C is grater');
}else if(d > e){
    console.log('d is grater');
}else{
    console.log('c is grater');
}

console.log('==========================');
let g = 5;
console.log(g ** 2);
console.log(g ** 3);
console.log('==========================');


// Increment and decrement  operator  ---> ++, --
console.log('Increment and decrement  operator');
console.log('--------------------');
let inc = 10;
let ch = inc++
console.log(inc);
console.log(ch);

let test = 5;
//          5      +   7    +   7
let test1 = test++ + ++test + test++;
console.log('test1 = ' +test1);
console.log('test = ' +test);


// Bitwise operator  ---> &, |, ~, ^ , >> ,<<
console.log('Bitwise operator');
console.log('--------------------');
let h = 10;
let i = 8;
console.log(h & i);
