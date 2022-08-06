function findLeepYear(year) {
    let nextLeepYear = [];
    for(let i = 0; i < year.length; i++) {
        const index = i;
        const element = year[index]
        if(element % 4 === 0) {
            console.log(year, element);
            nextLeepYear.push(element);
        }
    }
    return nextLeepYear;  
}
const myYear = [2023, 2024, 2025, 2028, 2030];
console.log(findLeepYear(myYear));