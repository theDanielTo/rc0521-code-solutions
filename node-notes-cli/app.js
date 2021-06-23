/* eslint-disable no-prototype-builtins */
const fs = require('fs');
const data = require('./data.json');
const operation = process.argv[2];
const noteId = process.argv[3];

switch (operation) {
  case 'read':
    for (const noteId in data.notes) {
      console.log(noteId + ':', data.notes[noteId]);
    }
    break;
  case 'create':
    data.notes[data.nextId++] = process.argv[3];
    updateDataJson();
    break;
  case 'delete':
    if (data.notes.hasOwnProperty(noteId)) {
      delete data.notes[noteId];
      updateDataJson();
    } else {
      console.error('There are no notes with that ID.');
    }
    break;
  case 'update':
    if (data.notes.hasOwnProperty(noteId)) {
      data.notes[noteId] = process.argv[4];
      updateDataJson();
    } else {
      console.error('There are no notes with that ID.');
    }
    break;
  default:
    console.error('That is not a valid operation.\nTry "add", "create", "delete", or "update"');
}

function updateDataJson() {
  fs.writeFile('data.json', JSON.stringify(data, null, 2) + '\n', err => {
    if (err) throw err;
  });
}
