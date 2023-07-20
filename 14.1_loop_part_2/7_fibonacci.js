let userInput = +prompt('How many fibonacci number you want');
let a = -1, b = 1, c;
while(userInput != 0){
    c = a + b;
    console.log(c);
    a = b;
    b = c;
    userInput--;
}