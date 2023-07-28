// Creating String
let a = 'Faizan';
let b = new String('Ahmad');
console.log(a + ' -------> ' + typeof a);
console.log(b + ' --------> ' + typeof b);
let c = new String('Faizan');
console.log('---------------------');
console.log( a == c);
console.log(a === c);
console.log('---------------------');
let d = "This is 'about' javascript ";
console.log(d);
let e = 'Hi, developer welcome in "js"';
console.log(e);
console.log('---------------------');
console.log('String Methods')
console.log('---------------------');
let str = 'Faizan Ahmad, i am Web developer ';
console.log(str.length);
console.log('---------------------');
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log('---------------------');
console.log(str[3]);
console.log(str.charAt(3));
console.log(str.charAt(3));
console.log(str.charCodeAt(7)) ;
console.log(str.includes('Web'));
console.log('---------------------');
console.log(str);
console.log(str.split());
console.log('---------------------');
console.log(str.indexOf('q',2));
console.log(str.lastIndexOf('a',2));
console.log('---------------------');
// console.log(str)
// let str1 = str.replace('e','a');
// console.log(stra)
let str3 = 'The rain in SPAIN stays mainly in the plain';
let res = str3.match(/ain/gi);
console.log(str3);
console.log(res);
console.log('---------------------');
let r1 = str3.replace("a","e");
console.log(str3);
console.log(r1)
console.log(str3.replaceAll("a","e"));
console.log('---------------------');
