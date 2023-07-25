function getUserInput(){
    let num = []
    for(let i=0; i<3; i++){
        num[i] = +prompt('Enter ' + (i+1) + ' value');
    }
    getAverage(num);
}
function getAverage(av){
    let average,temp=0;
    for(let i=0; i<av.length; i++){
        temp += av[i]
    }
    average = temp / av.length
    console.log('Average is ' +average)
}
getUserInput();