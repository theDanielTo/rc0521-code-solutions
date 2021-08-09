/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;

  let newEnd = list;
  let end = list.next;
  while (end.next !== null) {
    newEnd = end;
    end = end.next;
  }
  newEnd.next = null;
}
