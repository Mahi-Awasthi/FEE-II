// Higher Order Function

function printName(func,n){
    for(let i=1;i<=n;i++){
        // console.log("Mahi");
        func();
    }
}

let myName= function(){
    console.log("Mahi");
}
printName(myName,20);