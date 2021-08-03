/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  let top, secondFromTop;

  if (stack.peek() !== undefined) top = stack.pop();
  if (stack.peek() !== undefined) secondFromTop = stack.pop();

  if (secondFromTop !== undefined) stack.push(secondFromTop);
  if (top !== undefined) stack.push(top);

  return secondFromTop;
}
