"use strict"

// 1-  can't declared variable without var, let and const
a = 10;
console.log(a);


// 2 -  function with duplicate argument is not allowed
function test(a, a, a){
    console.log(a + a + a);
}
test(10,20,30);


// 3 - NaN, undefined and infinity can't use as variable name 
var NaN = 10;
var undefined = 20;
console.log(NaN, undefined);


// 4 - undeleteable properties can't be delete
var a = 10;
delete a;
console.log(a);

const obj = {a: 10, b : 20};
console.log(obj);
delete obj.a;
console.log(obj);


// 5 - multiple assignment are not allowed;
var a  = b = c = 90;
console.log(a, b, c)