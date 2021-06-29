const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  res.json(data.notes);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive number' });
  }
  if (!data.notes[req.params.id]) {
    res.status(404).json({ error: 'no notes with that id' });
  }
  res.status(200).json(data.notes[req.params.id]);
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (res.statusCode !== 200) {
    res.status(500).json({ error: 'an unexpected error occured.' });
  } else if (req.body.content === '') {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const noteObj = req.body;
    noteObj.id = data.nextId;
    data.notes[data.nextId++] = noteObj;
    res.status(201).json(noteObj);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive number' });
  }
  if (!data.notes[req.params.id]) {
    res.status(404).json({ error: 'no notes with that id' });
  } else {
    delete data.notes[req.params.id];
    res.sendStatus(204);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on *:3000');
});
