let userInput = +prompt('Enter a number');
let fact = 1, i=userInput;
while( i != 0){
   fact = fact * i;
   i--;
}
console.log('Factorial is ' +fact);