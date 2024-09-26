var person1={
    name:"Yash",
    age:25,
};

//person2 object person1 property as a prototype
console.log(person1);
var person2=Object.create(person1);
console.log(person2);
console.log(person2.name)

//prototype is a mechanism (like in JS to achieve inheritence)

// console.log(person2.__proto__==person1); //False

var person3=Object.create(person2);
console.log(person3);
console.log(person3.age)
