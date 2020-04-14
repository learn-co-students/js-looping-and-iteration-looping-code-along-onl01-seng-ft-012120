// Code your solutions in this file
function writeCards(arr, celebration) {
    let display= [];
  for (let i = 0; i < arr.length; i++) {
    display.push(`Thank you, ${arr[i]}, for the wonderful ${celebration} gift!`);
  }
  return display
}

function countDown(num) {
  while (num >= 0) {
    console.log(num--)
  }
}