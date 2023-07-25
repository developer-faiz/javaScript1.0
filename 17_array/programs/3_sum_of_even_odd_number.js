const getUserInput = ()=>{
    let storingUserInput = [];
    for(let i=0; i<6; i++){
        storingUserInput[i] = +prompt('Enter ' +(i+1)+ ' value');
    }
    getSumOfEvenOdd(storingUserInput);
}
const getSumOfEvenOdd = (storingUserInput)=> {
    let sumEven = 0, sumOdd = 0;
    for(let i=0; i<storingUserInput.length; i++){
        if(storingUserInput[i] % 2 == 0){
            sumEven += storingUserInput[i];
            // console.log(sumEven);
        }else{
            sumOdd += storingUserInput[i];
            // console.log(sumOdd);
        }
    }
    console.log('Given Array');
    for(i of storingUserInput){
        console.log(i)
    }
    console.log('Sum of all even numbers are ' + sumEven);
    console.log('Sum of all odd numbers are ' + sumOdd);
}
getUserInput();