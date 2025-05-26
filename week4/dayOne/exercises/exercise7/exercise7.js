(function(username) {
  const navbar = document.getElementById("navbar");

  const userDiv = document.createElement("div");
  userDiv.className = "user-profile";

  const nameSpan = document.createElement("span");
  nameSpan.textContent = username;

  const img = document.createElement("img");
  img.src = "https://i.pravatar.cc/40";
  img.alt = `${username}'s profile picture`;

  userDiv.appendChild(nameSpan);
  userDiv.appendChild(img);

  navbar.appendChild(userDiv);
})("John");
