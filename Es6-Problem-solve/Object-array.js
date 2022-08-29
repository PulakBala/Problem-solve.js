//একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const obj = [
    {
        name: 'chocklet1',
        brand: 'us',
        price: 1000
    },
    {
        name: 'chocklet2',
        brand: 'us',
        price: 3000
    },
    {
        name: 'chocklet3',
        brand: 'us',
        price: 200
    },
    {
        name: 'chocklet',
        brand: 'us',
        price: 5000
        
    }
];
const find = obj.find(x =>x.price =='5000');
console.log(find);