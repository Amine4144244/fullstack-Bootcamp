const form = document.getElementById("userForm");
console.log("Form element:", form);

const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
console.log("First Name Input (by ID):", firstNameInput);
console.log("Last Name Input (by ID):", lastNameInput);

const firstNameByName = document.getElementsByName("firstname")[0];
const lastNameByName = document.getElementsByName("lastname")[0];
console.log("First Name Input (by name):", firstNameByName);
console.log("Last Name Input (by name):", lastNameByName);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (firstName === "" || lastName === "") {
    alert("Please fill in both fields.");
    return;
  }

  const firstNameItem = document.createElement("li");
  firstNameItem.textContent = firstName;

  const lastNameItem = document.createElement("li");
  lastNameItem.textContent = lastName;

  const answerList = document.querySelector(".usersAnswer");
  answerList.appendChild(firstNameItem);
  answerList.appendChild(lastNameItem);

  firstNameInput.value = "";
  lastNameInput.value = "";
});
