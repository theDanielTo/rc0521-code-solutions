const nameInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#user-email');
const messageTextArea = document.querySelector('#user-message');

nameInput.addEventListener('focus', handleFocus);
nameInput.addEventListener('blur', handleBlur);
nameInput.addEventListener('input', handleInput);

emailInput.addEventListener('focus', handleFocus);
emailInput.addEventListener('blur', handleBlur);
emailInput.addEventListener('input', handleInput);

messageTextArea.addEventListener('focus', handleFocus);
messageTextArea.addEventListener('blur', handleBlur);
messageTextArea.addEventListener('input', handleInput);

function handleFocus(event) {
  console.log('focus event triggered');
  console.log('Value of event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event triggered');
  console.log('Value of event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('Value of event.target.name:', event.target.name);
  console.log('Value of event.target.value:', event.target.value);
}
