/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  let top, secondFromTop;

  if (stack.print() !== 'Stack { <empty> }') top = stack.pop();
  if (stack.print() !== 'Stack { <empty> }') secondFromTop = stack.pop();

  if (secondFromTop !== undefined) stack.push(secondFromTop);
  if (top !== undefined) stack.push(top);

  return secondFromTop;
}
