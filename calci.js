const addex=require('./addex');
const difference=require('./difference2');
const multiplex=require('./multipex');
const division=require('./division');
var a = "1021345678899097766554342445567893234567890";
var b = "-213455678990897655412334456789";



if((a[0] == '-') && (b[0] != '-')){
a=a.substr(1);
if(parseInt(a) > parseInt(b)){
console.log(" addition: " + "-" + difference.sub(a , b));
console.log(" Difference: " + "-" + addex.add(a , b));
console.log(" multiplication: " + "-" + multiplex.multiply(a , b));
console.log(" Quotient: " + "-" + division.division(a,b));
}
else{
console.log(" addition: " + difference.sub(b , a));
console.log(" Difference: " + "-" +addex.add(b , a));
console.log(" multiplication: " + "-" + multiplex.multiply(a , b));
console.log(" Quotient: " + division.division( a , b));
}
}

else if((b[0] == '-') && (a[0] != '-')){
b=b.substr(1);
if(parseInt(a) > parseInt(b)){
console.log(" addition: " + difference.sub(a , b));
console.log(" Difference: " + addex.add(a , b));
console.log(" multiplication: " + "-" + multiplex.multiply(a , b));
console.log(" Quotient: " + "-" + division.division( a , b));
}
else{
console.log(" addition: " + "-" + difference.sub(b , a));
console.log(" Difference: " +addex.add(b , a));
console.log(" multiplication: " + "-" + multiplex.multiply(a , b));
console.log(" Quotient: " + division.division( a , b));
}
}

else if((a[0] == '-') && (b[0] == '-')){
a = a.substr(1);
b = b.substr(1);
if(parseInt(a) > parseInt(b)){
console.log(" addition: " + "-" + addex.add(a , b));
console.log(" Difference: "  + "-" + difference.sub(a , b));
console.log(" multiplication: " + multiplex.multiply(a , b));
console.log(" Quotient: " + division.division( a , b));
}

else{
console.log(" addition: " + "-" + addex.add(b , a));
console.log(" Difference: " + difference.sub(b , a));
console.log(" multiplication: " + multiplex.multiply(a , b));
console.log(" Quotient: " + division.division( a , b));
}
}

else{
    if(parseInt(a) > parseInt(b)){
    console.log(" addition: " + addex.add(a , b));
    console.log(" Difference: " + difference.sub(a , b));
    console.log(" multiplication: " + multiplex.multiply(a , b));
    console.log(" Quotient: " + division.division( a , b));
    }

    else{
    console.log(" addition: " + addex.add(b , a));
    console.log(" Difference: " + "-" +difference.sub(b , a));
    console.log(" multiplication: " + multiplex.multiply(a , b));
    console.log(" Quotient: " + division.division( a , b));
    }
    }