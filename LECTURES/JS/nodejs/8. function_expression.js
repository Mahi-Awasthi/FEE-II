// Function that can be stored as a value in a variable

function sum(a,b){
    return a+b;
}
console.log(sum(5,3))

// function expression as a anonymous function

const add = function (a,b){
    return a+b;
}
console.log(add(5,3))

// function to find cube

var num = 200;
var cube = function(num){
    return num**3;
};
console.log(cube(3));