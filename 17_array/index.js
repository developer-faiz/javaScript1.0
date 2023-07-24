// creating arrays
const arr1 = [10,20,30,40];
console.log(arr1)

const arr2 = new Array(10,30,40,'faizan');
console.log(arr2);

const arr3 = new Array(5);
console.log(arr3);

// itrating on array
console.log('Using for loop')
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i])
}
console.log('In reverse order')
for(let i=(arr1.length-1); i >= 0; i--){
    console.log(arr1[i])
}

console.log('Using for in loop');
for(i in arr1){
    console.log(arr1[i])
}
console.log('Using for of loop');
for( i of arr1){
    console.log(i);
}
console.log('Using forEach loop');
arr1.forEach( (value, curIndex, currentArray) =>{
    console.log(value + ' -----> ' + curIndex + ' --->  array  --->' + currentArray)
} );

console.log('Using delete');

const test = [10,'Faizan', 'Ahnad', 900];
for(i of test){
    console.log(i);
}
delete test[0];

for(i of test){
    console.log(i)
}
