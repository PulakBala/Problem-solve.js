/*const people = [
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

const number = people.reduce((previous, current) => {
   return previous + current.age 
}, 0);
console.log(number);