function getUserInput(){
    let storingNumber = []
    for(let i=0; i<3; i++){
        storingNumber[i] =  +prompt('Enter ' +(i+1) + ' value');
    }
    getSum(storingNumber);
}
function getSum(storingNumber){
    let sum = 0;
    for(let i=0; i<storingNumber.length; i++){
        sum += storingNumber[i];
    }
    console.log('Sum is ' +sum)
}
getUserInput();