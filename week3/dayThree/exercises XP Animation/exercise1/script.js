setTimeout(() => {
  alert("Hello World");
}, 2000); 

setTimeout(() => {
  const container = document.getElementById("container");

  const p = document.createElement("p");
  p.textContent = "Hello World";

  container.appendChild(p);
}, 2000);


const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

const intervalId = setInterval(() => {
  const p = document.createElement("p");
  p.textContent = "Hello World";

  container.appendChild(p);

  if (container.getElementsByTagName("p").length >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

clearButton.addEventListener("click", () => {
  clearInterval(intervalId);
});
