// Code your solutions in this file
function writeCards(names, event){
    let cards = [];
    let message;
    for (let i = 0; i < names.length; i++){
        message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        console.log(message);
        cards.push(message);
    }
    return cards
}

function countDown(number){
    while (number >= 0){
        console.log(number)
        number--;
    }
}