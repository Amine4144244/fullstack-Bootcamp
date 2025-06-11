const express = require('express');
const app = express();
const booksRoutes = require('./server/routes/booksRoutes');

app.use(express.json());
app.use('/api/books', booksRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});