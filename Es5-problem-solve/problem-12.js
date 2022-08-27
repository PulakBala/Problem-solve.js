//inch to feet convert

function inchToFeet(inches) {
    const feet = inches / 12 ;
    return feet;
}
const dadaInches = 84;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const myInches = 67;
const myFeet = inchToFeet(myInches);
console.log(parseInt(myFeet));