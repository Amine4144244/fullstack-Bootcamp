const container = document.getElementById('container');
console.log(container);

const firstUl = document.querySelectorAll('.list')[0];
firstUl.children[1].textContent = 'Richard';

const secondUl = document.querySelectorAll('.list')[1];
secondUl.removeChild(secondUl.children[1]); 

const allUls = document.querySelectorAll('.list');
allUls.forEach(ul => {
  ul.children[0].textContent = 'Amine'; 
});

allUls.forEach(ul => {
  ul.classList.add('student_list');
});

firstUl.classList.add('university', 'attendance');

container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';

for (let li of secondUl.children) {
  if (li.textContent === 'Dan') {
    li.style.display = 'none';
  }
}

for (let li of firstUl.children) {
  if (li.textContent === 'Richard') {
    li.style.border = '1px solid black';
  }
}

document.body.style.fontSize = '18px';
