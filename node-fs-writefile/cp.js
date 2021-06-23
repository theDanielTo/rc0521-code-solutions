const fs = require('fs');

const readFrom = process.argv[2];
const writeTo = process.argv[3];

fs.readFile(readFrom, 'utf8', (err, fileContents) => {
  if (err) throw err;
  fs.writeFile(writeTo, fileContents, err => {
    if (err) throw err;
  });
});
