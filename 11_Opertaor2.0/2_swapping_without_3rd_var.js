let firstValue = +prompt('Enter first Value');
let secondValue = +prompt('Enter second value');
console.log('Before swapping ' + firstValue+ ' and ' + secondValue);
firstValue = firstValue + secondValue;
secondValue = firstValue - secondValue;
firstValue = firstValue - secondValue;
console.log('after swapping ' + firstValue+ ' and ' + secondValue);