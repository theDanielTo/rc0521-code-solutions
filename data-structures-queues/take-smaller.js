/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const top = queue.dequeue();
  const next = queue.dequeue();
  if (typeof next !== 'undefined') {
    queue.enqueue(Math.max(top, next));
    return Math.min(top, next);
  }
  return top;
}
