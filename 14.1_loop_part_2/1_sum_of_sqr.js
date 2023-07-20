let userInput = +prompt('Enter a number');
let sqr = 0;
for(let i=0; i<=userInput; i++){
     sqr = i + sqr;
}
let sumOfSqr = sqr * sqr;
console.log('Sum of Square is ' +sumOfSqr)