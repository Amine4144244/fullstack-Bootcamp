const allBooks = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
    alreadyRead: true
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    alreadyRead: false
  }
];

const bookSection = document.querySelector('.listBooks');

allBooks.forEach(book => {
  const bookDiv = document.createElement('div');

  const bookText = document.createElement('p');
  bookText.textContent = `${book.title} written by ${book.author}`;

  if (book.alreadyRead) {
    bookText.style.color = 'red';
  }

  const bookImg = document.createElement('img');
  bookImg.src = book.image;
  bookImg.style.width = '100px';

  bookDiv.appendChild(bookText);
  bookDiv.appendChild(bookImg);

  bookSection.appendChild(bookDiv);
});