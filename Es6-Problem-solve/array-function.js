/*
write an arrow function where it will do the folloing:
a) Square each array element
b)Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
*/
const squarArra = (elements) => {
    let sum = 0;
    const numbers = elements.map(x => x * x);
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
const squarArray = [10, 11, 34, 63, 12];
const squarResult = squarArra(squarArray);
console.log(squarResult);