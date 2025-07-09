// Write a named function filterEvenNumbers that takes an array of numbers as a parameter and returns a new array containing only the even numbers.

function filterEvenNumbers(arr) {
    return arr.filter((num)=>{
        return num%2==0;
    })
}

console.log(filterEvenNumbers([5,4,63,7,2,78]));