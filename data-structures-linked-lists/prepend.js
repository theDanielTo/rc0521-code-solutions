/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  if (typeof list.data === 'undefined') return;

  const node = new LinkedList(value);
  node.next = list;

  return node;
}
