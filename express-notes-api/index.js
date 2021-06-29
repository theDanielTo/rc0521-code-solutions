const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  res.json(data.notes);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) res.status(400).json({ error: 'id must be a positive number' });
  if (!data.notes[req.params.id]) res.status(404).json({ error: 'no notes with that id' });
  res.status(200).json(data.notes[req.params.id]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on *:3000');
});
