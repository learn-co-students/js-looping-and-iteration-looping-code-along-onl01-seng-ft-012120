
let names = [ 'Lisa', 'Kaitlin', 'Jan' ]
let messages = []
function writeCards(names, event) {

        for (let i = 0; i < names.length; i++) {
       messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        }
return messages;

}


function countDown(num) {
        while (num > -1) {
           console.log(num);
           num--;

        }
        
}
