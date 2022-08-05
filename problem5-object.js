var shoppingCart = {
    books: 3,
    sundlass: 1,
    keyboard: 5,
    mouse: 1,
    pen : 23,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const value = Object.values(shoppingCart);
console.log(value);

for(var i = 0; i < keys.length; i++) {
    var propertiesName = keys[i];
    var propertiesValue = shoppingCart[propertiesName];
    console.log(propertiesName, propertiesValue);
}