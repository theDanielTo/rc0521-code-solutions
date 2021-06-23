const fs = require('fs');

// const promise =

// for (let i = 2; i < process.argv.length; i++) {
//   fs.readFile(process.argv[i], 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// }

Promise.all(process.argv).then(file => {
  if (file.charAt(0) !== '/') {
    try {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
});
