import React from 'react';

export default function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.text}
      <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
}