/*
write an arrow function where it will do the following:
 a) It will take an array where the array elements will be the name of your friends;
 b) Check if the length of each element is even , push elements with even length to a new array and return the result;
*/

const add =(nameArray) => {
    let evenLength = [];
    for(let i = 0; i < nameArray.length; i++) {
        const number = nameArray[i];
        if(number.length % 2 === 0) {
            evenLength.push(number);
        }
       
    }
    return evenLength;
}
const friendsName = ['rahim', 'karim', 'jabbar', 'safic', 'salam'];
const friendsNameLength = add(friendsName);
console.log(friendsNameLength);