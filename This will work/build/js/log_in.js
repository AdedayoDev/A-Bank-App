// On the Log In Page
const logInUsername = document.querySelector("#username1");
const logInPassword = document.querySelector("#password1");
const logIn = document.querySelector("#logIn");

function input(event) {

  event.preventDefault()
  logInUsername.textContent;
  logInPassword.textContent;

  let storedUsername = localStorage.getItem("username");
  let storedPassword = localStorage.getItem("password");
  if (
    logInUsername.value === storedUsername &&
    logInPassword.value === storedPassword
  ) {
    window.location.href = 'account_details.html';
  } else if (logInUsername.value != storedUsername) {
    alert("Incorrect Username");
  } else if (logInPassword.value != storedPassword) {
    alert("Incorrect Password");
  }
}

logIn.addEventListener("click", input);
