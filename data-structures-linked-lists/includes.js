/* exported includes */

function includes(list, value) {
  if (list.data === value) return true;

  if (list.next !== null) {
    let end = list.next;
    if (end.data === value) return true;
    while (end.next !== null) {
      end = end.next;
      if (end.data === value) return true;
    }
  }

  return false;
}
