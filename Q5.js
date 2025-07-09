// Provide an example of array destructuring and object destructuring in JavaScript
 
let arr = [1,3,4,5];

let [a1,a2,a3,a4]=arr;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

let student = {
    name: "sagar",
    roll: 5,
    div: 'A'
};

let {name:a,roll:b,div:c} =student;


console.log(a)
console.log(b)
console.log(c)