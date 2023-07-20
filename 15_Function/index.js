// Ways to define function

// 1 - Function declaration or named function
function add(a,b){
    console.log(a + b);
}
add(10,5);

// 2 - Function expression or anonymos function
const sub = function(a, b){
    console.log(a - b)
}
sub(8, 2);

// 3 - Self invoked function
(function(a,b){
    console.log(a * b);
})(5,2);

// 4 - Arrow function
 const mod = (a, b) => {
    console.log( a % b);
 }
 mod(10, 5);

//  function declaration vs function expression

function funDecl(){
    console.log('I am Function declaration');
}
funDecl();

// funExp();
const funExp = function(){
    console.log('I am function expression')
}

//  limitation of Arrow function
function funD(){
    console.log('funD');
    console.log(this)  
}
funD();

const funArrow = () =>{
    console.log('funArrow');
    console.log(this);
}
funArrow();

const user = {
    fname : "Faizan",
    lname : "Ahmad",
    fullName : function(){
        console.log(this.fname , this.lname)
    }
}
user.fullName();

const user1 = {
    fname : "Faizan",
    lname : "Ahmad",
    fullName : () => {
        console.log(this.fname , this.lname)
    }
}
user1.fullName();

function f1() {
    console.log(this); // this = window / Btn1 / Btn2 / Btn3
    this.style.backgroundColor = 'red';
  }

// const f1 = () => {
//     console.log(this); // this = window / Btn1 / Btn2 / Btn3
//     this.style.backgroundColor = 'red';
//   }
//   f1();

  document.getElementById("myBtn1").addEventListener("click", f1);
  document.getElementById("myBtn2").addEventListener("click", f1);
  document.getElementById("myBtn3").addEventListener("click", f1);

//  Benefit of arrow function

const obj = {
    count : 0,
    increment : function (){
        this.count++;
        console.log(this.count)
    }
}
obj.increment();

const obj1 = {
    count : 0,
    increment : function (){
        this.count++;
        console.log(this.count);
        function test(){
            console.log('this ===> ' + this.count)
        }
        test();
        const test1 = () => {
            console.log('this ===> ' + this.count)
        }
        test1();
    }
}
obj1.increment();


class Employee {
    name = 'Faizan';
    greet = function (){
         console.log('Hello ===> ' + this.name);
    };
    greet1 = () => {
        console.log('Hello ===> ' + this.name);
    };
}
let emp1 = new Employee;
// emp1.greet();
// emp1.greet1();
// setTimeout(emp1.greet1, 2000);


class Employee1 {
    name = 'Ahmad';
    displayInfo = function (){
         console.log('Hello ===> ' + this.name);
    };
    displayInfo1 = () => {
        console.log('Hello ===> ' + this.name);
    };
}
let emp2 = new Employee1;
let b = emp2.displayInfo1;
b();




