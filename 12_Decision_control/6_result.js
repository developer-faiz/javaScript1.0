// Reading student data
let stuName = prompt('Enter your name');
let stuAge = prompt('Enter Your Age');
let stuGender = prompt('Enter your gender');
let sub1 = +prompt('Enter 1st subject mark');
let sub2 = +prompt('Enter 2nd subject mark');
let sub3 = +prompt('Enter 3rd subject mark');
let sub4 = +prompt('Enter 4th subject mark');
let sub5 = +prompt('Enter 5th subject mark');

// Average calculating
let total = sub1 + sub2 + sub3 + sub4 + sub5;
let avg = total / 5;

// Displaying student details
console.log('Name : ' +stuName);
console.log('Age : ' +stuAge);
console.log('Gender : ' +stuGender);
console.log('Total : ' +total);
if(avg >= 50){
    console.log('Pass');
    if(avg >= 70){
        console.log('1st division');
    }else if(avg >= 60){
        console.log('2nd division');
    }else{
        console.log('3rd division');
    }
}else{
    console.log('Fail')
}
console.log('Percentage ' +avg+'%')