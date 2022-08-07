//Write a function. The function takes an array as input. That array will contain many numbers. Your task will be to input as many numbers as there are in the array. Find the average of those numbers. Then return that average function.

function arrayAvg(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        total = sum / 7;     
    }
    return total;
}
const myNumbers = [13, 54, 34, 23, 63, 16, 86];
console.log(arrayAvg(myNumbers).toFixed(2));

