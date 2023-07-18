let principleAmount = +prompt('Enter principle amount');
let rateOfInterest = +prompt('Enter rate of interest');
let time = +prompt('Enter time of interest');

simpleInterest = (principleAmount * rateOfInterest * time) / 100;
console.log('Simple interest is ' +simpleInterest);