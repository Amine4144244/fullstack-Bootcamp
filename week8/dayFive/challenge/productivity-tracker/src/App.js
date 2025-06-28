import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';
import { useSelector } from 'react-redux';
import { selectCompletedTasks } from './features/tasksSlice';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const completedCount = useSelector(selectCompletedTasks);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📝 Productivity Tracker</h1>
      <p>Completed Tasks: {completedCount}</p>
      <CategorySelector selected={selectedCategory} setSelected={setSelectedCategory} />
      <TaskList categoryId={selectedCategory} />
    </div>
  );
};

export default App;