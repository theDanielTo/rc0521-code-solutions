/* exported getLength */

function getLength(list) {
  if (typeof list.data === 'undefined') return 0;

  let count = 1;

  if (list.next !== null) {
    let end = list.next;
    count++;
    while (end.next !== null) {
      end = end.next;
      count++;
    }
  }

  return count;
}
