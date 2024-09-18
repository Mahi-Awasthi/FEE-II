// global scope: by default all variables has a functional scope means they can be accessing throught the code base.

let globalVar1="Global Variable";
var globalVar2="Global Variable";
const globalVar3="Global Variable";

function myfunc(){
    console.log(globalvar1);
}
myfunc();