/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() === 'undefined') return;

  for (let i = 0; i < index; i++) {
    if (queue.peek() !== 'undefined') {
      queue.enqueue(queue.dequeue());
    }
  }

  return queue.dequeue();
}
