const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();
const signUpInfo = {
  First: firstNameInput.value,
  Last: lastNameInput.value,
  Email: emailInput.value,
  Password: passwordInput.value  
};

localStorage.setItem('userInfo', JSON.stringify(signUpInfo));

  // TODO: Create user object from submission

  // TODO: Set new submission to local storage
});
