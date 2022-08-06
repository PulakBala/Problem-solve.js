// miles to km converter

function milesToKilometers(miles) {
    const kilometers = miles * 1.609;
    return kilometers;
}

const dhakaToSavarmiles = 2;
const dhakaToSavarkm = milesToKilometers(dhakaToSavarmiles);
console.log(dhakaToSavarkm);

const dhakaToMadaripurMiles = 86.991;
const dhakaToMadaripurKm = milesToKilometers(dhakaToMadaripurMiles);
console.log(parseInt(dhakaToMadaripurKm));