import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      {todo.text}
      <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
    </li>
  );
}

export default TodoItem;