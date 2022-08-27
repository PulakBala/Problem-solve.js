function maxInArray(numbers) {
    let largest = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if(largest < element) {
            largest = element;
        }
    }
    return largest;
}

const heights = [140, 230, 530, 23, 132];
const tallest = maxInArray(heights);
console.log(tallest);