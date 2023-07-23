// Normal Function 
function add(a,b,c){
    console.log(a+b+c);
}
add(10,20,30)
// Function curring
const sum = function(a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(sum(20) (30) (50));

// Pure function

// not pure function because its updating data
let mark = 80;
function avg(a){
    mark = 40;
    let gMark = 10;
    return mark + gMark;
}
avg(5)

// Pure function
let mark1 = 80;
function s(a){
    let gMark = 10;
    return mark1 + gMark;
}
s(20);

//Not a pure function because its not return a value
function msg(b){
    console.log('Welcome')
}
msg(1);


// Not a pure function because output or return value not depend on argument
function wlc(m){
    console.log('I am not pure function');
    let t = 90;
    return t;
}
wlc();