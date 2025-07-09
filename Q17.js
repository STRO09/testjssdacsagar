// Create a Function findMax That Accepts an Array of Numbers and Returns the Largest Number in the Array

let narr = [56,3,7,89,1];

function findmax(arr){
    return Math.max(...arr);
}

console.log(findmax(narr));