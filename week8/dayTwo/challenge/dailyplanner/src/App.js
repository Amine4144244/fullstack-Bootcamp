import React, { useState } from 'react';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      <h1>Daily Planner</h1>
      <DatePicker />
      <TaskForm existingTask={editingTask} onSave={() => setEditingTask(null)} />
      <TaskList onEdit={(task) => setEditingTask(task)} />
    </div>
  );
}

export default App;