// SKILLS
var h2B=document.createElement("h2");

h2B.innerText = "Skills";
console.log(h2B);

var body = document.querySelector("body");
body.appendChild(h2B);

var ulB=document.createElement("ul");

var linewC=document.createElement("li");
var linewC = document.querySelector("li");

ulB.appendChild(linewC);
body.appendChild(ulB);

linewC.innerText="Front-End: Js,React,CSS";
console.log(linewC);

var linewD=document.createElement("li");

ulB.appendChild(linewD);
body.appendChild(ulB);

linewD.innerText="Back-End: Python,Java,PHP";
console.log(linewD);

var linewE=document.createElement("li");

ulB.appendChild(linewE);
body.appendChild(ulB);

linewE.innerText="Other:AWS,Jenkins,Git";
console.log(linewE);

// HOBBIES
var h2A=document.createElement("h2");

h2A.innerText = "Hobbies";
console.log(h2A);

var body = document.querySelector("body");
body.appendChild(h2A);

var ulA=document.createElement("ul");

var linewA=document.createElement("li");
var linewA = document.querySelector("li");

ulA.appendChild(linewA);
body.appendChild(ulA);

linewA.innerText="Playing Piano";
console.log(linewA);

var linewB=document.createElement("li");

ulA.appendChild(linewB);
body.appendChild(ulA);

linewB.innerText="Reading Books";
console.log(linewB);

// CONTACTS
var h2new=document.createElement("h2");

h2new.innerText = "Contacts";
console.log(h2new);

var body = document.querySelector("body");
body.appendChild(h2new);

var ulnew=document.createElement("ul");

var linew=document.createElement("li");
var linew = document.querySelector("li");

ulnew.appendChild(linew);
body.appendChild(ulnew);

linew.innerText="mahi@gmail.com";
console.log(linew);

var linew2=document.createElement("li");

ulnew.appendChild(linew2);
body.appendChild(ulnew);


var a = document.createElement("a");

a.href = "https://www.linkedin.com/in/mahi-awasthi-1b113b298/";
a.innerText = "LinkedIn";

linew2.appendChild(a);
body.appendChild(linew2);
ulnew.appendChild(linew2)

console.log(linew2);
