let arr=[1,2,3,4,5];
Array.prototype.add= function(){
 x=arr.reduce((a,b) => a + b, 0);
return x;
}
console.log(arr.add());
