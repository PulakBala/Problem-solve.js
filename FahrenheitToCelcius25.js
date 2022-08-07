function fahrenheitToCelsius(fahrenheit) {
    const celsius = fahrenheit - 32;
    const fahrenheitToC = celsius / 1.8;
    return fahrenheitToC;
}

console.log(fahrenheitToCelsius(59).toFixed(2));