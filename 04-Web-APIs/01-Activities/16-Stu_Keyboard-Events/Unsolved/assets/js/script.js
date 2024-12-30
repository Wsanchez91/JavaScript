function keydownAction(event) {
  // TODO: Complete keydown function
  const keyPress = event.key;
  const keyCode = event.code;

  document.querySelector('#key').textContent = keyPress;
  document.querySelector('#code').textContent = keyCode;
  document.querySelector('#status').textContent = 'KEYDOWN Event';
}

function keyupAction(event) {
  console.log(event);
  document.querySelector('#status').textContent = 'KEYUP Event';
}

document.addEventListener('keyup', keyupAction);
// TODO: Add Event Listener for 'keydown' event
document.addEventListener('keydown', keydownAction);
