function celsiusToF (number) {
    const celsius = number * 1.8;
    const fahrenheit = celsius + 32;
    return fahrenheit;
}
console.log(celsiusToF(-20));