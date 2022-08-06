function milesToKilometers(miles) {
    const kilometers = miles * 1.609;
    return kilometers;
}

const dhakaToSavarkm = 2;
const dhakaToSavarmiles = milesToKilometers(dhakaToSavarkm);
console.log(dhakaToSavarmiles);