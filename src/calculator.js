var prompt = require('prompt-sync')();
let v1=Number( prompt("enter the first number: "));
let op= prompt("enter the operator + - * / % : ");
let v2=Number(prompt("enter the second number: "));
var r;

if(op == '+'){
 r=v1+v2;
}
else if(op == '-'){
 r=v1-v2;
}
else if(op == '*'){
 r=v1*v2;
}
else if(op == '/'){
 r=v1/v2;
}
else if(op == '%'){
 r=v1%v2;
}
console.log(`${v1} ${op} ${v2} = ${r}`);