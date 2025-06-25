import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

function TaskList({ onEdit }) {
  const { selectedDate, tasksByDate } = useSelector((state) => state);
  const tasks = tasksByDate[selectedDate] || [];

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} date={selectedDate} onEdit={onEdit} />
      ))}
    </ul>
  );
}

export default TaskList;