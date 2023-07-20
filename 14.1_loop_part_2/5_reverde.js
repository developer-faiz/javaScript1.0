let userInput = +prompt('Enter a number');
console.log('Given number ' +userInput);
while(userInput != 0){
    let res = userInput % 10;
    console.log(res);
    userInput = parseInt(userInput / 10);
}