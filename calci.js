const add = require ('./addex');
const mul = require('./multipex');
const diff = require('./difference2');
const divv = require('./division');
// const addd = require ('./addition');

const b = "0";
const a = "100000000000999955346787678765676567875432345678";



console.log("the first numbner is "+ a);
console.log("the 2nd number is "+ b);

const sum = add.add(a,b);
console.log('sum of two numbers is'+ sum);

//const adddd = addd.addd(a,b);
//console.log('sum of two numbers is ' + adddd);

const subtract = diff.sub(a ,b);
console.log('differnece of two numbers is '+ subtract);

const multip = mul.multiply(a,b);
console.log("multiplication is "+ multip);
 

const  divs = divv.division(a,b);
console.log("division of two numbers is "+ divs);