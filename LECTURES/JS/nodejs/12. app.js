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

var person3=Object.create(person2);
console.log(person3);
console.log(person3.age)

console.log(person3.__proto__==person3); //false
console.log(person2.__proto__==person1); //true 
console.log(person1.__proto__==Object.prototype); //true
console.log(Object.prototype==__proto__); //false