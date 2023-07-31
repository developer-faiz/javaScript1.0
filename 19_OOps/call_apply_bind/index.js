console.log('-------------call()-------------');
function fullName(){
    console.log(this, this.fname, this.lname)
}
fullName();
let obj1 = {fname : 'Faizan'}
fullName.call(obj1)

let obj2 = {lname : 'Ahmad'}
fullName.call(obj2);
console.log('-------------call()-------------');
let obj3 = {
    a : 10,
    add : function(b){
        return this.a + b;
    }
}
let result = obj3.add(20);
console.log(result);

let obj4 = {a : 20}
result = obj3.add.call(obj4, 30);
console.log(result);

let obj5 = {
    a : 30,
    b : 10,
    sub : function(){
        return this.a - this.b;
    }
}
let result1 = obj5.sub();
console.log(result1);

let obj6 = {a: 5, b:2}
result = obj5.sub.call(obj6);
console.log(result);
console.log('-----------------------------');

function sayHello(msg){
    console.log(msg , this.fname)
}
sayHello('hello');
let obj7 = {fname : 'Rohit'};
sayHello.call(obj7, 'Hello');

let user = {
    name : 'faizan',
    id : 101,
    sal : 12000,
    fullname : function(){
        console.log(this.name, this.id, this.sal);
    }
}

// setInterval( ()=> {
//     user.fullname.call(user)
// }, 1000 )

console.log('--------------apply()-----------');
function add(a,b){
    console.log(this.num+a+b);
}
let obj8 = {num : 20}
let arr = [10,20];
add.apply(obj8, arr);

let result2 = Math.max(10,30,5);
console.log(result2);

let arr2 = [10,20,30,40];
result2 = Math.max.apply({}, arr2);
console.log(result2);

function mul(a,b,c,d){
    console.log(a+b+c+d);
}
let arr3 = [1,2,3,10];
 mul.apply({}, arr3);

 console.log('--------------bind()-----------');
 let user2 = {
    a: 10, 
    b: 20,
    add : function(){
        console.log(this.a+this.b);
    }
 }
 let obj9 = {a: 30, b:30}
 user2.add();

 let sum = user2.add.bind(obj9);
 console.log(sum(1,2));

 class user3{
    id = 101;
    sal = 2000;
    location = 'Mumbai';
    details(){
        console.log('detials is ' + this.id, this.sal, this.location);
    }
 }

 let user4 = new user3();
 let a = user4.details();


