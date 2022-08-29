/*
টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/

const name = 'Pulak Bala';
const phnNum = 015371401;

const info = `My name is  ${name}. My phone number ${phnNum}.`
// console.log(info);

const obj = {
    name : 'Pulak Bala',
    age : 23,
    id: 1082,
    batch: 50,
    university: 'Prime University',
    city: 'Dhaka'
};

const details = `My name is ${obj.name}. I am ${obj.age} years old. My present address ${obj.city} city. Right now i am studying Prime University. `;

console.log(details);