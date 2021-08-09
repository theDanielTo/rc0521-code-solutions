/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const node = new LinkedList(value);
  node.next = list.next;
  list.next = node;
}
