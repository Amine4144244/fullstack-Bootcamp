const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const TASKS_FILE = path.join(__dirname, '..', 'tasks.json');

// Helper: Read tasks from file
function readTasks() {
  try {
    const data = fs.readFileSync(TASKS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
}

// Helper: Write tasks to file
function writeTasks(tasks) {
  try {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

router.get('/', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    completed: false
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
  const { title, description, completed } = req.body;
  if (!title || !description || typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Title, description, and completed status are required' });
  }

  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

  tasks[taskIndex] = {
    id: tasks[taskIndex].id,
    title,
    description,
    completed
  };

  writeTasks(tasks);
  res.json(tasks[taskIndex]);
});

router.delete('/:id', (req, res) => {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

  const deletedTask = tasks.splice(taskIndex, 1)[0];
  writeTasks(tasks);
  res.json(deletedTask);
});

module.exports = router;
