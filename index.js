// Code your solutions in this file
function writeCards(names, event){
    const result = [];
    for (let i = 0; i < names.length; i++){
        result.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return result;
};

function countDown(number){
    for (let i = number; i >= 0; i--){
        console.log(i);
    };
};