let currentColor = 'black';
let isMouseDown = false;

const grid = document.getElementById('grid');
for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);

    square.addEventListener('mouseover', function() {
        if (isMouseDown) {
            square.style.backgroundColor = currentColor;
        }
    });

    square.addEventListener('mouseDown', function (){
        square.style.backgroundColor = currentColor;
    });
}

document.body.addEventListener('mousedown', () => {
  isMouseDown = true;
});
document.body.addEventListener('mouseup', () => {
  isMouseDown = false;
});

const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
  button.addEventListener('click', function () {
    currentColor = this.getAttribute('data-color');
  });
});

const clearButton = document.getElementById('clearBtn');

clearButton.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = 'white'; // Reset to white
  });
});
