let userInput = +prompt('Enter a number to check whether positive , negative or zero');
if(userInput > 0){
    console.log('Positive');
}else{
    if(userInput == 0){
        console.log('Zero');
    }else{
        console.log('Negative')
    }
}