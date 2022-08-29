/*
সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
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