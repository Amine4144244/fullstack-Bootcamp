const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const router = express.Router();

const USERS_FILE = path.join(__dirname, '..', 'users.json');

function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE));
  } catch {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Register
router.post('/register', async (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  if (!name || !lastName || !email || !username || !password)
    return res.status(400).send('All fields are required');

  const users = readUsers();
  const exists = users.find(u => u.username === username || u.email === email);
  if (exists) return res.status(409).send('Username or email already exists');

  const hashed = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    name,
    lastName,
    email,
    username,
    password: hashed
  };

  users.push(newUser);
  writeUsers(users);
  res.send('User registered successfully');
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send('User not found');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send('Invalid password');

  res.send('Login successful');
});

// Get all users
router.get('/', (req, res) => {
  const users = readUsers();
  res.json(users.map(u => ({ ...u, password: undefined })));
});

// Get user by ID
router.get('/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  const { password, ...safeUser } = user;
  res.json(safeUser);
});

// Update user
router.put('/:id', (req, res) => {
  const { name, lastName, email } = req.body;
  const users = readUsers();
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('User not found');

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    lastName: lastName || users[userIndex].lastName,
    email: email || users[userIndex].email
  };

  writeUsers(users);
  res.send('User updated successfully');
});

module.exports = router;
