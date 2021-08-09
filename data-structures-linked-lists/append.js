/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  if (list.next === null) return list.data;

  let end = list.next;
  while (end.next !== null) {
    end = end.next;
  }

  end.next = new LinkedList(value);
}
