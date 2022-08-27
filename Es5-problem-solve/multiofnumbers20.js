function multiOfNumbers(number) {
    let result = 1;
    for(let i = 1; i <= number; i++) {
        result = result * i;

    }
    return result;
}
const result = multiOfNumbers(7);
console.log(result);