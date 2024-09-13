// let a=[1,2,3,4,5,6,7]
// console.log(a.splice(1,3)) output: [ 2, 3, 4 ]
// console.log(a.splice(2,3,6,6)) output: [3, 4, 5]
// console.log(a) output: [1, 2, 6, 6, 6, 7]

// There are 2 ways to declare an object: constructor/literals:
//1. constructors
const obj=new Object();
obj.name="MAHI"
console.log(typeof obj)
console.log(obj)

// 2. literals
const user={
    name:"Mahi",
    'last name':"Awasthi", //if there's a space in between key. we can use '' symbol
    rollno:22,
    subject:"CPP"
}

// Change object value:
user.name="Mehak"

// Accessing object value:
console.log(user['name'])
console.log(user['last name'])

// Object inside an object:
let arr=[1,2,[1,2,3,4],34]
console.log(arr[2],[2])

let user1={
    user2: {
        name:'Mahi',
        subject:'CPP',
    },
    user3: {
        name:"Awasthi",
        subject:"OS",
    }
};
console.log(user1.user3.name)