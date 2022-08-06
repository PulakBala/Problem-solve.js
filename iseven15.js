function checkEven(number) {
    const remainder = number % 2;
    if(remainder === 0) {
        return true;
    } else{
        return false;
    }
}

const myEvenNumber = checkEven(232);
console.log(myEvenNumber);
const myOddNumber = checkEven(223);
console.log(myOddNumber);