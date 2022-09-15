const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const error = document.querySelector('.password-error');
const submit = document.querySelector('button');
const form = document.querySelector('form');

const password_event_listener_flag = false;

function isValid() {
  return password.value == confirm_password.value;
}

function checkValidity() {
  if (isValid()) {
    password.className = 'valid';
    error.textContent = '';
  } else {
    password.className = 'invalid';
    error.textContent = '*Passwords do not match';
  }
}

window.addEventListener('load', () => {
  password.className = isValid() ? 'valid' : 'invalid';
});

confirm_password.addEventListener('input', () => {
  if (!password_event_listener_flag) {
    password.addEventListener('input', checkValidity);
  }
  checkValidity();
});

submit.addEventListener('click', (event) => {
  // Add "required" attribute to necessary fields
  fname = document.getElementById('first-name');
  lname = document.getElementById('last-name');
  email = document.getElementById('email');

  [fname, lname, email, password, confirm_password].forEach(field => {
    field.setAttribute('required', '');
  });
});

form.addEventListener('submit', (event) => {
  if (password.className == 'invalid') {
    event.preventDefault();
  }
});