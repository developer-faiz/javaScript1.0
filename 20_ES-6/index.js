// let and const
// string to template literal
// Multi-line String
// default parameter
// arguments keyword to ...rest parameter
// Exponent operator
// Destructuring array and object
// for in and for of loop
// Arrow function

console.log('----------Template literal----------');
let fname = 'Faizan';
console.log('My name is ' +fname);
console.log(`My name is ${fname}`);

console.log('----------Multi-line String----------');
let p = 'This ia about web, \t'
        +'This ia about web, \t'
        +'This ia about web \t'
        +'This ia about web \t'
        +'This ia about web \t';
console.log(p);

let p1 = `This is a javaScript program,
 This is a javaScript program,
 This is a javaScript program,`
console.log(p1);

console.log('----------default parameter----------');
function add(a,b,c){
     a = a || 0;
     b = b || 0;
     c = c || 0;
    console.log(a+b+c);
}
add(10,20);

function add1(a=0,b=0,c=0){
    console.log(a+b+c);
}
add1(10);

console.log('----------rest(...) parameter----------');
function add2(){
    console.log(arguments, typeof arguments)
    let sum =0;
    for(let i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    console.log(sum);
}
add2(10,10,80);


function add3(...arr){
    let sum = 0;
    for(ele of arr){
         sum += ele;
    }
    console.log(sum);

    let a = arr.filter( (arr) =>{
        return arr > 3;
    } )
    console.log(a)
}
add3(1,2,3,4,5,6);

function add4(a,b,...c){
    console.log(a,b,c);
}
add4(10,20,30);

console.log('----------Exponent Operator----------');
let a = 10;
console.log(a ** 2);
console.log(a ** 3);

console.log('----------Destructuring of object and array----------');
let arr1 = [10,20,30];
let a1 = arr1[0];
let a2 = arr1[1];
let a3 = arr1[2];
console.log(a1,a2,a3);

let [s1,s2,s3] = arr1;
console.log(s1,s2,s3);

console.log('---Object destructuring');
let user = {
    name : 'Faizan',
    id : 101,
    sal : 20000,
    addres : {
        city : 'lucknow',
        pinCode : 272206,
        state : 'U.p'
    }
}

let uname = user.name;
let uid = user.id;
let ucity = user.addres.city;
console.log(uname, uid, ucity);

let {id,sal,addres : {pinCode}} = user
console.log(id, sal,pinCode);

let {name : g, id:h} = user;
console.log(g,h);

console.log('------Object destructuring------');

let studentInfo = {
    sname : 'Rohit',
    sage : 20,
    scourse : 'UI',
    address : {
        city : 'AmmerPet',
        pin : 272205,
        state : 'T.S'
    }
}

let {address : {city, pin, state}} = studentInfo;
console.log(city, pin, state);

console.log('------Object destructuring------');
let mul = (a) => {
    console.log(a*a)
}
mul(10);

console.log('------Object destructuring------');

let arr2 = [10,20];
let arr3 = arr2;
arr3.push(30);
console.log(arr2, arr3);

let arr4 = [1,2,3];
// Value Copy - Shallow Copy
let arr5 = [...arr4];
arr5.push(4);
console.log(arr4, arr5);

let arr6 = [10,20,30];
let arr7 = [40,50];
arr6.push(...arr7);
console.log(arr6)