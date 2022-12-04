const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const inputUsername = document.querySelector('#username-login').value.trim();
  const inputPassword = document.querySelector('#password-login').value.trim();

  if (inputUsername && inputPassword) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username: inputUsername, password: inputPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the homepage
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const inputUsername = document.querySelector('#username-signup').value.trim();
  const inputPassword = document.querySelector('#password-signup').value.trim();

  if (inputUsername && inputPassword) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username: inputUsername, password: inputPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

console.log("46");

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

  console.log("52");

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

  console.log("58");