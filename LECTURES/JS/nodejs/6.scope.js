// 1. Global Scope: by default all variables has a functional scope means they can be accessing throught the code base.
let globalVar1="Global Variable";
var globalVar2="Global Variable";
const globalVar3="Global Variable";

function myfunc(){
    console.log(globalVar1);
}
myfunc();

// 2. Functional Scope: var declared inside a function can be accessed into a function only.
const globalVar4="Global variable";
function myfunc1(){
   let a =20;
   console.log(a);
   console.log(globalVar4);
}
myfunc1();

// 3. Block Scope:
{
    let ab=10;
    console.log(ab);
    const b=20;
    console.log(b);
    var c=30;
}
console.log(c);