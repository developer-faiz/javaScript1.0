const arr = [10,20,30,40,'Faizan',30.21,800];
console.log(arr);
arr.push('test');
console.log(arr);

console.log('---------------------');
let r1 = arr.pop();
console.log(arr);
console.log(r1);

console.log('---------------------');
arr.unshift('Faiz');
console.log(arr);
let r2 = arr.shift();
 console.log(arr);
 console.log(r2);

 console.log('---------------------');
 let r3 = arr.slice(2,5);
 console.log(arr);
 console.log(r3);

 console.log('---------------------');
 const arr2 = [10,20,30,40,50];
 console.log(arr2)
 let r4 = arr2.splice(2,0,'Faizan');
 console.log(arr2);
 console.log(r4);

 console.log('---------------------');
 const arr3 = [10,20,30,10,40,50,60,70];
 console.log( arr3.at(-1));

 console.log('---------------------');
 console.log(arr3.indexOf(10,1));
//  console.log(arr3.lastIndexOf(70));

console.log('---------------------');
console.log(arr3.includes(10));

console.log('---------------------');
let r5 = arr3.find((currElement)=> {
    return currElement < 50;
});
console.log(r5);

console.log('---------------------');
let r6 = arr3.findLast((currElement)=> {
    return currElement > 5;
});
console.log(r6);

console.log('---------------------');
let r7 = arr3.filter( (currElement)=> {
       return currElement < 4;
});
console.log(r7);


console.log('---------------------');
let r8 = arr3.findIndex( (currElement)=>{
    return currElement > 20;
} );
console.log(r8);


console.log('---------------------');
let r9 = arr3.findLastIndex( (currElement)=>{
    return currElement > 20;
} );
console.log(r9);

console.log('---------------------');
//  CURD operation
const month = ['Jan','Feb','march','April','July','Aug'];
console.log(month);
let indexMonth = month.indexOf('april');
if(indexMonth != -1){
    let updatedMonth = month.splice(indexMonth,1);
    console.log(month);
    console.log(updatedMonth);
}else{
    console.log('No such data found');
}
console.log('---------------------');
const arr4 = [100,50,3,47,20,30];

console.log(arr4);
 arr4.sort((a,b)=>{
    return b-a;
});
console.log(arr4)
console.log('---------------------');
console.log(arr4);
console.log(arr4.reverse());

console.log('---------------------');
const arr6 = ['Faizan', 'Amit','This'];
console.log(arr6);
console.log(arr6.join('-'));
let arr7 = 'This is about web';
console.log(arr7)
let temp = arr7.split();
console.log(temp)
const arr8 = [10,20,[20,'kl',[200,300,400,[1,3,5,7,11]]]];
console.log(arr8)
console.log(arr8.flat(2));
console.log(arr8.flat(Infinity))

