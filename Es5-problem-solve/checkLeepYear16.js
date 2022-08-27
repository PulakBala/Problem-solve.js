function checkLeepYear (number) {
    const remainder = number % 4;
    if(remainder === 0) {
        return true;
    }else{
        return false;
    }
}

const leepYear = checkLeepYear(2022);
console.log(leepYear);
const nextLeepYear = checkLeepYear(2024);
console.log(nextLeepYear);