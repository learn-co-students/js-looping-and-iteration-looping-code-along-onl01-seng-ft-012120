const writeCards = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      result.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    };
    return result
}

const countDown = (num) => {
    for(let i = num; i > -1; i--) {
        console.log(i);
    }
}

