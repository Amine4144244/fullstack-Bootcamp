import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { state } = useTasks();

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'ACTIVE') return !task.completed;
    if (state.filter === 'COMPLETED') return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) return <p>No tasks to show.</p>;

  return (
    <ul>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;