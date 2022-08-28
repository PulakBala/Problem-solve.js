/*
const people = [
    {name : 'Meena', age: 20},
    {name : 'Rina', age: 15},
    {name : 'Suchorita', age: 22}
];
Follow above  array of objects. So you have 3 objects as array element . Can you find out the total sum from here ?
20 + 15 + 22 = 57. The output will be 57
*/
const people = [
    {name : 'Meena', age: 20},
    {name : 'Rina', age: 15},
    {name : 'Suchorita', age: 22}
];
let sum = 0;
for(let i = 0; i < people.length; i++) {
    const index = people[i]
    const number = index.age;
    sum += number;
}
console.log(sum)
