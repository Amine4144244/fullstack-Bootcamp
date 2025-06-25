import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

function TaskItem({ task, date, onEdit }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{task.title}</span>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => dispatch(deleteTask(date, task.id))}>Delete</button>
    </li>
  );
}

export default TaskItem;