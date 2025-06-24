import React, { useRef, useState } from 'react';
import { useTasks } from '../context/TaskContext';

function TaskItem({ task }) {
  const { dispatch } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const saveEdit = () => {
    const updatedText = inputRef.current.value;
    if (updatedText.trim() !== '') {
      dispatch({ type: 'EDIT_TASK', payload: { id: task.id, text: updatedText } });
    }
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input defaultValue={task.text} ref={inputRef} onKeyDown={(e) => e.key === 'Enter' && saveEdit()} />
          <button onClick={saveEdit}>💾</button>
        </>
      ) : (
        <>
          <span onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
            {task.text}
          </span>
          <button onClick={handleEdit}>✏️</button>
          <button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}>❌</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;