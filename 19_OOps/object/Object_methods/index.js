const user = {
    name : 'Aamir',
    age : 20
}

// assign() methods
let permmison1 = {rolll : 1900, role : 'UI'};
let permmison2 = {canRead : true}
console.log(user);
let b = Object.assign(user, permmison1);
console.log(user);
console.log(b);
console.log(permmison1)

Object.assign(permmison1, permmison2);
console.log(permmison1);
console.log('------------------------------------------------------------')

const user1 = {
    name : 'Salman',
    gender : 'male',
    Lang : 'Hindi English'
}

let user2 = user1;
console.log(user1, user2);
user2.name = 'Rohit';
console.log(user1, user2);
console.log('------------------------------------------------------------')


let user3 = Object.assign({},user1);
console.log(user1, user3);
user3.name='Faiz';
console.log(user1, user3);

console.log('----------------------Create()---------------------');

const obj1 = {x:10, y:100};
console.log(obj1);
const obj2 = Object.create(obj1);
obj2.z = 100;
obj2.x = 20;
console.log(obj2);

console.log('-------------------------------------------');
const obj3 = {
    x : 20,
    z : 30,
    a : {s:100}
}
console.log(obj3);
const obj4 = Object.create(obj3);
console.log(obj4);
obj4.x = 30;
obj4.a.s = 300;
console.log(obj3, obj4);


console.log('---------------------- Freez()---------------------');
const obj5 = {
    cName : 'javaSript',
    cFee : 300,
    cLoctaion : 'Lucknow'
}
// console.log(obj5);
Object.freeze(obj5);
console.log(obj5);
delete obj5.cName;
obj5.duration = '2 months'
console.log(Object.isFrozen(obj5), obj5);

console.log('---------------------- Freez()---------------------');
const obj6 = {
    a: 10,
    b : 20,
    c : 30
}
console.log(obj6);
Object.seal(obj6);
delete obj6.a;
obj6.a = 100;
obj6.d = 1000;
console.log(Object.isSealed(obj6) ,obj6);

console.log('---------------------- key vs value vs entries---------------------');
console.log(Object.keys(obj6));
console.log(Object.values(obj6));
console.log(Object.entries(obj6));

console.log('---------------------- in vs hasOwnProperty---------------------');
class EmployeeInfo{
    constructor(id, name, sal){
        this.id = id;
        this.name = name;
        this.sal = sal;
    }
}
EmployeeInfo.prototype.place = 'Lucknow';
let emp1 = new EmployeeInfo(101, 'Teena', 30000);
console.log(emp1);
console.log('id' in emp1 );
console.log(emp1.hasOwnProperty('id'));
console.log('place' in emp1)
console.log(emp1.hasOwnProperty('place'));
