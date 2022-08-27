//write a function to get the lowest number in an array.

function lowestNumber (numbers) {
    console.log(Math.min(...numbers));
   
}
const myNumber = [12, 4, 34, 53, 13, 2, 11, 10];
const lowest = lowestNumber(myNumber);
console.log(lowest);