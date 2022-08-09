function maxNumber (num1, num2, num3) {
    
    if(num1 > num2 && num1 > num3) {
        console.log('num1 max number');
    }
    else if(num2 > num1 && num2 > num3) {
        console.log('num2 max number');
    }
    else{
        console.log('num3 max number');
    }
}

console.log(maxNumber(10, 20, 30));
