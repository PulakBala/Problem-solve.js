/*
[ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
*/
const oddArray = [1, 3, 5, 7, 9, 11, 13, 10, 17, 18, 20, 19];
const oddNumber = oddArray.filter(num => num%2 ===1);
console.log(oddNumber);
