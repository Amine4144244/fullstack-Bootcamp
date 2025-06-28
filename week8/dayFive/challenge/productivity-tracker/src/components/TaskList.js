import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory, toggleTaskComplete, deleteTask } from '../features/tasksSlice';

const TaskList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => selectTasksByCategory(state, categoryId));

  const handleToggle = useCallback((id) => {
    dispatch(toggleTaskComplete(id));
  }, [dispatch]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteTask(id));
  }, [dispatch]);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          <button onClick={() => handleToggle(task.id)}>✅</button>
          <button onClick={() => handleDelete(task.id)}>🗑</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;