const userList = document.querySelector('#user-list');

const xhlRequest = new XMLHttpRequest();
xhlRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhlRequest.responseType = 'json';

xhlRequest.addEventListener('load', function (event) {
  console.log(xhlRequest.status);
  console.log(xhlRequest.response);
  for (const item of xhlRequest.response) {
    const newLi = document.createElement('li');
    newLi.textContent = item.name;
    userList.appendChild(newLi);
  }
});

xhlRequest.send();
