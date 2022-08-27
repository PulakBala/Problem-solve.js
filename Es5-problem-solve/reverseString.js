function reverseString(text) {
    for(let i = text.length-1; i >= 0; i--) {
        const element = text[i];
        console.log(element);
    }
}

const myString = 'I am a bad boy'
const reverse = reverseString(myString);
console.log(reverse);