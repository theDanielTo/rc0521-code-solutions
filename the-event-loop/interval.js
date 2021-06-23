let count = 3;

const intervalID = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
  if (count > 0) console.log(count--);
}, 1000);
