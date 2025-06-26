import React, { useState } from 'react';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🗓️ Daily Planner</h1>
      <DatePicker />
      <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
      <TaskList onEdit={setEditingTask} />
    </div>
  );
}

export default App;