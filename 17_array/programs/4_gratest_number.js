function userInputData(){
    console.log('Welcome')
    let storingUserNumber = [];
    for(let i=0; i<5; i++){
        storingUserNumber[i] = +prompt('Enter ' + (i+1) + ' value');
    }
    findGreatestNumber(storingUserNumber);
}
function findGreatestNumber(storingUserNumber){
    let max = storingUserNumber[0];
    for(let i=1; i<storingUserNumber.length; i++){
        if(max < storingUserNumber[i]){
           max = storingUserNumber[i]
        } 
    }
    console.log(storingUserNumber);
    console.log('Greatest number is ' +max)
}
userInputData();