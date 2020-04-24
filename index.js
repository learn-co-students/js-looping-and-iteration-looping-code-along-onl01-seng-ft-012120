// Code your solutions in this file

function writeCards(array, event) {
  let cardArray = [];
  
  for (let i = 0; i < array.length; i++) {
    cardArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return cardArray;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  } 
}