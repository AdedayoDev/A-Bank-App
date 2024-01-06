const name = document.querySelector("#name");
const number = document.querySelector("#number");
const enterAmount = document.querySelector("#enterAmount");
const balance = document.querySelector("#balance");
const deposit = document.querySelector("#deposit");

// Getting Detail from LocalStorage
let username = localStorage.getItem("username");
let accNumber = localStorage.getItem("accNumber");
accNumber = JSON.parse(accNumber);

// Storing Input Balance Inside the localstorage
const addMoney = () => {
  const balanceInput = enterAmount.value;
  localStorage.setItem("balance", JSON.stringify(balanceInput));
  let totalAmount = localStorage.getItem("balance");
  totalAmount = JSON.parse(totalAmount);
 
  // Adding Total amount To DOM
  balance.innerHTML = `$ ${totalAmount}`;
  balance.style.color = "white";
  balance.style.fontWeight = "bold";
  balance.style.fontSize = "1.5rem";
};

// Adding to balance

const increaseFunds = () => {
  let totalAmount = localStorage.getItem("balance");
  totalAmount = Number(totalAmount)
  console.log(totalAmount);
}
increaseFunds()

// Adding the Custom Name Into the DOM
name.innerHTML = `Dear ${username}!`;
name.style.color = "white";
name.style.fontWeight = "bold";
name.style.fontSize = "1.5rem";

// Adding the generated Account Number into the DOM
number.innerHTML = accNumber;
number.innerHTML = `${accNumber}`;
number.style.color = "white";
number.style.fontWeight = "bold";
number.style.fontSize = "1.5rem";

deposit.addEventListener("click", (e) => {
  e.preventDefault()
  addMoney();
});
