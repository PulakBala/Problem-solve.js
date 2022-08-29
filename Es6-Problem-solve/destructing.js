/*
একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/
const obj = {
    name: 'prime',
    age: 20,
    capcity: 20000,
    dept: 'CSE, EEE, BBA, LLB',
    Location: 'mirpur 1'
}

const {name, age} = obj;
console.log(name, age);