let userInput = +prompt('Enter a number');
console.log('Given number ' +userInput)
let count = 0;
while(userInput != 0 ){
    userInput = parseInt(userInput / 10);
     count++;
   
}
console.log('total digit ' + count)