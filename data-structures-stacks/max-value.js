/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  if (stack.print() !== 'Stack { <empty> }') {
    while (stack.print() !== 'Stack { <empty> }') {
      const top = stack.pop();
      if (top > max) max = top;
    }
  }
  return max;
}
