function getUserInput(){
    let storingUserInput = [];
    for(let i=0; i<5; i++){
        storingUserInput[i] = +prompt('Enter ' + (i+1) + ' value');
    }
    getSorting(storingUserInput);
}
function getSorting(storingUserInput){
    let temp;
    for(let i=0; i<storingUserInput.length; i++){
        for(let j=i+1; j<storingUserInput.length; j++){
            if(storingUserInput[i] > storingUserInput[j]){
                  temp = storingUserInput[i];
                 storingUserInput[i] = storingUserInput[j];
                 storingUserInput[j] = temp
            }
        }
    }
    console.log(storingUserInput)
}
getUserInput();