let userInput = +prompt('Enter a number');
console.log('Given number is ' +userInput);
let sum = 0;
while(userInput != 0){
    let rem = userInput % 10;
    sum = sum + rem;
    userInput = parseInt(userInput / 10);
}
console.log('Sum of given number is ' +sum);



