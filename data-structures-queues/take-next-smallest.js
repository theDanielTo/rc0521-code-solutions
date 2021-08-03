/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') return;

  let current = queue.dequeue();

  while (true) {
    if (typeof queue.peek() !== 'undefined') {
      if (current < queue.peek()) {
        return current;
      } else {
        queue.enqueue(current);
        current = queue.dequeue();
      }
    } else return current;
  }
}
