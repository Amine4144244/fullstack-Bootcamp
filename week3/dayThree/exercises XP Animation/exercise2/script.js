function myMove() {
  const box = document.getElementById("animate");
  let position = 0;

  box.style.left = "0px";

  const containerWidth = document.getElementById("container").offsetWidth;
  const boxWidth = box.offsetWidth;

  const interval = setInterval(() => {
    if (position >= containerWidth - boxWidth) {
      clearInterval(interval);
    } else {
      position++;
      box.style.left = position + "px";
    }
  }, 1);
}
