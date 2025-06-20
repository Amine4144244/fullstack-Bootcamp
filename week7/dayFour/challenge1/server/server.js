// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// GET endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post('/api/world', (req, res) => {
  console.log('Received POST request with body:', req.body);
  const { value } = req.body;
  res.json({ 
    message: `I received your POST request. This is what you sent me: ${value}` 
  });
});