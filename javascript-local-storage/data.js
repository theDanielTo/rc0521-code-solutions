/* exported todos */

var todos = [];

const previousTodosJSON = window.localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) todos = JSON.parse(previousTodosJSON);

window.addEventListener('beforeunload', function () {
  const todosJSON = JSON.stringify(todos);
  window.localStorage.setItem('javascript-local-storage', todosJSON);
});
