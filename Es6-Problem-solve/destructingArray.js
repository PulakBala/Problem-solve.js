/*
[চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
*/
const array = [1, 2, 3, 4, 5, 6, 7];
const [,,three] = array;
console.log(three);