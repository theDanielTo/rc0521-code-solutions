/* eslint-disable no-console */
const express = require('express');
const app = express();
const pg = require('pg');

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    SELECT *
      FROM "grades";
  `;
  db.query(sql)
    .then(result => {
      const table = result.rows;
      res.json(table);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'All fields are required.'
    });
    return;
  }
  if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'Invalid score. Must be between 0 & 100.'
    });
    return;
  }

  const values = `
    '${req.body.name}', '${req.body.course}', '${req.body.score}'
  `;
  const sql = `
    INSERT INTO "grades" ("name", "course", "score")
         VALUES (${values});
  `;
  db.query(sql)
    .then(result => {
      res.status(201).json(req.body);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'All fields are required.'
    });
    return;
  }
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  if (req.body.score < 0 || req.body.score > 100) {
    res.status(404).json({
      error: 'This grade does not exist in studentGradeTable'
    });
    return;
  }

  const updatedName = `'${req.body.name}'`;
  const updatedCourse = `'${req.body.course}'`;
  const updatedScore = `'${req.body.score}'`;
  const sql = `
    UPDATE "grades"
       SET "name" = ${updatedName},
           "course" = ${updatedCourse},
           "score" = ${updatedScore}
     WHERE "gradeId" = ${gradeId};
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(req.body);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  if (req.body.score < 0 || req.body.score > 100) {
    res.status(404).json({
      error: 'This grade does not exist in studentGradeTable'
    });
    return;
  }

  const sql = `
    DELETE FROM "grades"
          WHERE "gradeId" = ${gradeId};
  `;
  db.query(sql)
    .then(result => {
      res.sendStatus(204);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, () => {
  console.log('Listening on *:3000');
});
