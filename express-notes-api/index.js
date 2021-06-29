const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  res.json(data.notes);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on *:3000');
});
