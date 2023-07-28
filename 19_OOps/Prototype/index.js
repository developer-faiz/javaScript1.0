class Student{
    constructor(roll, name, course){
        this.roll = roll;
        this.name = name;
        this.course = course;
    }
}
// Creating prototype
Student.prototype.clgName = "Integral"
let str1 = new Student(101, 'Faizan', 'UI');
let str2 = new Student(102, 'Amit', 'Java');
let str3 = new Student(103, 'Salman', 'React');
console.log(str1, str2, str3);
console.log(str1.clgName);
console.log(str2.clgName);





let arr1 = [10,20];
console.log(arr1);