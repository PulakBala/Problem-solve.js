// writ ea function that will take 3 numbers will return the min numbers . use if else;

function maxNumber (num1, num2, num3) {
    
    if(num1 < num2 && num1 < num3) {
        console.log('num1 min number');
    }
    else if(num2 < num1 && num2 < num3) {
        console.log('num2 min number');
    }
    else{
        console.log('num3 min number');
    }
}

console.log(maxNumber(10, 2, 30));