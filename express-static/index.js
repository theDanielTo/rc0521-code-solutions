const express = require('express');
const path = require('path');
const app = express();

const joinedPath = path.join(__dirname, 'public');

app.use(express.static(joinedPath));

app.listen(3000, () => {
  console.log('Listening on *:3000');
});
