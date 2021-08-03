/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') return;

  const container = [];
  let lastVal = queue.dequeue();
  container.push(lastVal);

  let found = false;
  while (typeof queue.peek() !== 'undefined' && !found) {
    const last = container.length - 1;
    if (container[last] < queue.peek()) {
      lastVal = container[last];
      found = true;
    } else {
      container.push(queue.dequeue());
    }
  }

  // container.splice(container.length - 1, 1);
  // for (const elem of container) queue.enqueue(elem);
  for (let i = 0; i < container.length - 1; i++) queue.enqueue(container[i]);

  return lastVal;
}
