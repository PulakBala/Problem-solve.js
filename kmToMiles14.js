function kmToMiles(kilometers) {
    const miles = kilometers * 0.621371;
    return  miles;
}

const dhakaToGazipurkm = 2;
const dhakaToGazipurMiles = kmToMiles(dhakaToGazipurkm);
console.log(dhakaToGazipurMiles);