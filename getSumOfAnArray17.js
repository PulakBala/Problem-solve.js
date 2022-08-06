function getSumOfAnArray(numbers) {
    let sum = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
const myNumbers = [13, 54, 34, 23, 63, 16, 86];
console.log(getSumOfAnArray(myNumbers));