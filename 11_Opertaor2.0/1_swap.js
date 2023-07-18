let firstValue = +prompt('Enter first Value');
let secondValue = +prompt('Enter second value');
console.log('Before swapping ' + firstValue+ ' and ' + secondValue);
let temp;
temp = firstValue;
firstValue = secondValue;
secondValue = temp;
console.log('after swapping ' + firstValue+ ' and ' + secondValue);