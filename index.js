
function writeCards(array, occasion) {
    let cards =[]
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${occasion} gift!`);
    }
    return cards;
}

writeCards(["Ada", "brendan", "Ali"], "birthday");


function countDown(i) {
    while (i > -1) {
        console.log(i);
        i--;
    }
}