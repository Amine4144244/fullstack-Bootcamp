let heading1 = document.querySelector("h1");
console.log("Heading 1 content is:", heading1.innerText);

let article = document.querySelector("article");
let paragraphs = article.getElementsByTagName("p");
if (paragraphs.length > 0) {
  article.removeChild(paragraphs[paragraphs.length - 1]);
}

let heading2 = document.querySelector("h2");
heading2.addEventListener("click", function () {
  heading2.style.backgroundColor = "red";
});

let heading3 = document.querySelector("h3");
heading3.addEventListener("click", function () {
  heading3.style.display = "none";
});

let boldButton = document.getElementById("bold-btn");
boldButton.addEventListener("click", function () {
  let allParagraphs = document.querySelectorAll("article p");
  allParagraphs.forEach(function (p) {
    p.style.fontWeight = "bold";
  });
});

