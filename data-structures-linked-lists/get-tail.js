/* exported getTail */

function getTail(list) {
  if (list.next === null) return list.data;

  let end = list.next;
  while (end.next !== null) {
    end = end.next;
  }
  return end.data;
}
