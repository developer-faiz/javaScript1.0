// Creating Class using constructor function - ES-5
function Student(roll, name, gender, subject){
      this.roll = roll;
      this.name = name;
      this.gender = gender;
      this.subject = subject;
}
let std1 = new Student(11, 'Faiz', 'Male', 'js');
console.log(std1);

// Using class keyword ES6
class Employee{
    id;
    empName;
    empAge;
    empSalary;
    constructor(a,b,c,d){
        this.id = a;
        this.empName = b;
        this.empAge = c;
        this.empSalary = d;
    }
}
let emp1 = new Employee(101, 'Amit', 20, 'Male');
let emp2 = new Employee(101, 'Teena', 20, 'Female');
console.log(emp1 );
console.log(emp2);

class Trainer{
    constructor(a, b, c){
        // name, exp and sub are main variable while a,b,c are local variable 
        this.name = a;
        this.exp = b;
        this.sub = c;
    }
}
let tr1 = new Trainer('Sanjay', 10, 'Reactjs');
console.log(tr1)