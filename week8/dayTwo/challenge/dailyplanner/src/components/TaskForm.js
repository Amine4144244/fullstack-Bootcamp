import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../redux/actions';

function TaskForm({ existingTask = null, onSave }) {
  const [title, setTitle] = useState(existingTask ? existingTask.title : '');
  const dispatch = useDispatch();
  const date = useSelector((state) => state.selectedDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (existingTask) {
      dispatch(editTask(date, existingTask.id, { title }));
    } else {
      dispatch(addTask(date, { title }));
    }

    setTitle('');
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">{existingTask ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default TaskForm;