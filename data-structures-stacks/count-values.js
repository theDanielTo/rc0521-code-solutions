/* exported countValues */

function countValues(stack) {
  const poppedElems = [];
  let count = 0;
  if (stack.print() !== 'Stack { <empty> }') {
    while (stack.print() !== 'Stack { <empty> }') {
      poppedElems.push(stack.pop());
      count++;
    }
  }

  return count;
}
