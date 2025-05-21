// Change the id from 'navBar' to 'socialNetworkNavigation'
const navDiv = document.getElementById('navBar');
navDiv.setAttribute('id', 'socialNetworkNavigation');

// Create a new <li> element
const newLi = document.createElement('li');

// Create a text node with "Logout"
const logoutText = document.createTextNode('Logout');

// Append the text node to the new <li>
newLi.appendChild(logoutText);

// Append the new <li> to the <ul>
const ul = navDiv.querySelector('ul');
ul.appendChild(newLi);

// Retrieve and display the text of the first and last <li> using firstElementChild & lastElementChild
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First <li> text:", firstLi.textContent);  // Profile
console.log("Last <li> text:", lastLi.textContent);    // Logout
