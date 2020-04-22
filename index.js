// Code your solutions in this file


function writeCards(arr, event){
const msg = [];
for(let i = 0; i < arr.length; i++) {
    
    msg.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
}
return msg;

}

function countDown(n){
    while (n>=0){
        console.log(n);
        n--;
    }



}