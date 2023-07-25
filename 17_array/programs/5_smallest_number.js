const getUserInput = () =>{
    let storingUserInput = [];
    for(let i=0; i<5; i++){
        storingUserInput[i] = +prompt('Enter ' + (i+1) + ' value');
    }
    findSmallestNumber(storingUserInput);
}
const findSmallestNumber = (storingUserInput) => {
    let min = storingUserInput[0];
    for(let i=1; i<storingUserInput.length; i++){
        if(min > storingUserInput[i]){
            min = storingUserInput[i];
        }
    }
    console.log(storingUserInput)
    console.log('Smallest number is ' + min)
}
getUserInput();