// Reading student data
function getUserData(){
    let sname = prompt('Enter your name');
    let sage = prompt('Enter age');
    let sgender = prompt('Enter geder');
    let marks1 = +prompt('Enter 1st subject mark');
    let marks2 = +prompt('Enter 2nd subject mark');
    let marks3 = +prompt('Enter 3rd subject mark');
    let avg = getAverage(marks1, marks2, marks3);
    displayingStudentInfo(sname, sage, sgender, avg);
}

// Calculating avg
function getAverage(marks1, marks2, marks3){
    let total = marks1 + marks2 + marks3;
    let avg = total / 3;
    return avg;
}



// Displaying student details
function displayingStudentInfo(sname, sage, sgender, avg){
    console.log('Name - ' + sname);
    console.log('Age - ' +sage);
    console.log('Gender - ' +sgender);
    console.log(avg + '%');
    getGrade(avg)
}

// Calculating Grade
function getGrade(avg){

    if(avg >= 50){
        console.log('Pass');
        if(avg >= 60){
            console.log('first division');
        }else if(avg >= 50){
            console.log('Second division')
        }else{
            console.log('Third division')
        }
    }else{
        console.log('Fail');
    }
}
getUserData();