const bookList = [
  {
    isbn: '9780765376671',
    title: 'The Way of Kings',
    author: 'Brandon Sanderson'
  },
  {
    isbn: '9781441738707',
    title: 'It',
    author: 'Stephen King'
  },
  {
    isbn: '9780141301051',
    title: 'The BFG',
    author: 'Roald Dahl'
  }
];

console.log('Value of bookList:', bookList);
console.log('typeof bookList:', typeof bookList);

console.log('JSON.stringify(bookList):', JSON.stringify(bookList));

const studentJsonStr = '{ "id":"44", "name":"Buddy" }';
console.log('Value of studentJsonStr:', studentJsonStr);
console.log('typeof studentJsonStr:', typeof studentJsonStr);

const studentJson = JSON.parse(studentJsonStr);
console.log('Value of studentJson:', studentJson);
console.log('typeof studentJson:', typeof studentJson);
