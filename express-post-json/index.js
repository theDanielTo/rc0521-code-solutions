const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const key in grades) gradesArr.push(grades[key]);
  res.json(gradesArr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = {
    name: req.body.name,
    course: req.body.course,
    score: req.body.score,
    id: nextId
  };
  res.status(201).json(grades[nextId++]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on *:3000');
});
