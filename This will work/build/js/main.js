let username = document.querySelector("#username");
let password = document.querySelector("#password");
let button = document.querySelector("#generateNumber");
const accNumber = document.querySelector("#accountNumber");
const createAccount = document.querySelector("#createAccount")

 username.value;
 password.value;

// Setting userName and Password to LocalStorage
const setDetails = () => {
    const setUsername = username.value;
    localStorage.setItem("username", setUsername);

    const setPassword = password.value;
    localStorage.setItem("password", setPassword);
};

//  Generate a fake account Number
const accountNumber = () => {
  if (username.value === "" ) {
    alert("Please Enter  your username")
  } else if (password.value == "") {
    alert("Please Enter your password")
  } else {
    let acc = Math.floor(Math.random() * 10 ** 10);
    accNumber.style.paddingLeft = "2rem";
    accNumber.innerText = acc;   
  }
  // Storing the generated account Numb in the Local Storage
  localStorage.setItem("accNumber", JSON.stringify(accNumber.innerText))
};

button.addEventListener("click", () => {
    setDetails()
    accountNumber();
  });


const openAccount = () => {
  if (username.value === "" ) {
    alert("Please Enter  your username")
  } else if (password.value == "") {
    alert("Please Enter your password")
  } else if (accNumber.innerText == "") {
    alert("Please Generate an Account Number")
  } else {
    window.location.href = "log_in.html"
  }
}

createAccount.addEventListener("click", openAccount)


