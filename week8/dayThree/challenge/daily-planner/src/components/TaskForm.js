import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/plannerSlice';

const TaskForm = ({ editingTask, setEditingTask }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.text);
    } else {
      setText('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editingTask) {
      dispatch(editTask({ date: selectedDate, id: editingTask.id, newText: text }));
      setEditingTask(null);
    } else {
      dispatch(addTask({ date: selectedDate, text }));
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
      {editingTask && <button onClick={() => setEditingTask(null)}>Cancel</button>}
    </form>
  );
};

export default TaskForm;