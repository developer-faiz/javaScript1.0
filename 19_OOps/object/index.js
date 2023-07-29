// Creating Objet

// Using object literal
const user = {
   'First Name' : 'faizan',
    age : 20,
    add : 'Mumbai'
}
console.log('--------- using Object Literal --------------');
console.log(user.name);
console.log(user.age);
console.log(user['add']);

// Using class
class Employee{
    constructor(id, name, sal){
         this.id = id;
         this.name = name;
         this.sal = sal;
    }
}
console.log('--------- using class --------------');
const emp1 = new Employee(101, 'Ahmad', 6000);
console.log(emp1)
console.log(emp1.id);
console.log(emp1['name']);
console.log(emp1.sal);

console.log('--------- . vs [] --------------');
console.log(user["First Name"]);

let x = 'age';
console.log(user.x);
console.log(user[x]);

let a = JSON.stringify(user);
console.log(user + '------' + typeof user);
console.log(a);
let b = JSON.parse(a);
console.log(b);

console.log('--------- Deleting field from object --------------');
delete user['First Name'];
console.log(user);

const sDetails = {
      name : 'FAizan',
      age : 20,
      course : 'MCA',
      contactNumber : 9565545883,
      address : 'Lucknow'
}
let findLength = Object.keys(sDetails);
console.log(findLength.length);
console.log(findLength);

for(objectKey in sDetails){
    console.log(objectKey)
}

console.log('--------- CURD operation in  object --------------');
console.log(sDetails);

sDetails.name = 'Salman';
console.log(sDetails);

sDetails.group = 'A';
console.log('List of all key')

console.log(sDetails);

delete sDetails.age;
console.log(sDetails);

sDetails['Last Name'] = 'Ahmad';
for(cd in sDetails){
    console.log(cd)
}
console.log(sDetails)


