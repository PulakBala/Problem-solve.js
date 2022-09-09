//prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

const promptValue = () =>{
    const inputField = document.getElementById('prompt-field');
    const inputValue = inputField.value;
    const value = JSON.parse(inputValue);
    const totalValue = value + 200;
    
    if(totalValue !== value){
        alert(totalValue)
    }
    
}