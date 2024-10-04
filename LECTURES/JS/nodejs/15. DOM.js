var newh1=document.querySelector("h1");
console.dir(newh1.classList);

// adding class:
newh1.classList.add("red");

// remove class:
newh1.classList.remove("red");

// contains: classList.contains
var b = newh1.classList.contains("red");
console.dir(b);

// toggle: add and remove class.
newh1.classList.toggle("red");
newh1.classList.toggle("iron");