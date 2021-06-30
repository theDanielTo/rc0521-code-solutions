const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const key in data.notes) notesArr.push(data.notes[key]);
  res.json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || isNaN(req.params.id)) {
    res.status(400).json({ error: 'id must be a positive number' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: 'no notes with that id' });
  } else res.status(200).json(data.notes[req.params.id]);
});

app.use(express.json());

app.post('/api/notes', (req, res, err) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const noteObj = req.body;
    noteObj.id = data.nextId;
    data.notes[data.nextId++] = noteObj;
    const dataJson = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJson, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'an unexpected error occured.' });
      } else {
        res.status(201).json(noteObj);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || isNaN(req.params.id)) {
    res.status(400).json({ error: 'id must be a positive number' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: 'no notes with that id' });
  } else {
    delete data.notes[req.params.id];
    const dataJson = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJson, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'an unexpected error occured.' });
      } else {
        res.status(204).json(req.body);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (res.statusCode !== 200) {
    res.status(500).json({ error: 'an unexpected error occured.' });
  } else if (req.params.id < 0 || isNaN(req.params.id)) {
    res.status(400).json({ error: 'id must be a positive number' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: 'no notes with that id' });
  } else {
    const noteObj = req.body;
    noteObj.id = parseInt(req.params.id);
    data.notes[req.params.id] = noteObj;
    const dataJson = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJson, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'an unexpected error occured.' });
      } else {
        res.status(200).json(noteObj);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on *:3000');
});
