/* exported updateNext */

function updateNext(list, value) {
  if (typeof list.data === 'undefined' || !list.next) return;

  const newList = list;
  newList.next.data = value;
}
