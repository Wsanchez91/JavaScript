const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');
const msgDiv = document.querySelector('#msg');
const userEmailSpan = document.querySelector('#user-email');
const userPasswordSpan = document.querySelector('#user-password');

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  
  userEmailSpan.textContent = localStorage.getItem('email');
  userPasswordSpan.textContent = localStorage.getItem('password');

  renderLastRegistered(userEmailSpan);
  renderLastRegistered(userPasswordSpan);
}

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // TODO: Save email and password to localStorage and render the last registered user
  }

});
console.log(email);
console.log(password);