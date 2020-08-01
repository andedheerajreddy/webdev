// "use strict"
var a=3;
console.log(a);
process.stdout.write("a");
process.stdout.write("dheeraj");
var b=13;
console.log(`the value of number ${b}`);    

function add(a,b){
    return a+b;
}
console.log(add(3,4));
var sum=(a,b)=>{
    return a+b;
}
console.log(sum(a,b));
var c=5;
var ab;
function prod(a,b,callback){
c--;
if(c===0)
    brea(ab);
    callback(a+b);

  
}

ab = setInterval(() => {
    prod(a,b,(ans)=>{
        console.log(`ans i${ans}`);
        })  
}, 1000);

function brea(){
    clearInterval(ab);
}