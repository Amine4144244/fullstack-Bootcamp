let allBoldItems;

function getBoldItems() {
  const paragraph = document.getElementById("myParagraph");
  allBoldItems = paragraph.getElementsByTagName("strong"); 
}

function highlight() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "blue";
  }
}

function returnItemsToDefault() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black";
  }
}

getBoldItems();

const paragraph = document.getElementById("myParagraph");

paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);
