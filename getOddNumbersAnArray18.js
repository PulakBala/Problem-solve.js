function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
   for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        if(element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }
        
   }
   return oddNumbers;
}


const myNumbers = [32, 23, 53, 64, 75, 76, 87];
console.log(getOddNumbersOfAnArray(myNumbers));



