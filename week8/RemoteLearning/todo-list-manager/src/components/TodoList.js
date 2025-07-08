import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTodos } from '../features/todos/todoSelectors';
import { toggleTodo, deleteTodo, addTodo } from '../features/todos/todosSlice';

const TodoList = () => {
  const [filter, setFilter] = useState('all');
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const dispatch = useDispatch();
  
  const todos = useSelector(state => selectFilteredTodos(state, filter));

  const handleSubmit = e => {
    e.preventDefault();
    if (newTodoTitle.trim()) {
      dispatch(addTodo(newTodoTitle));
      setNewTodoTitle('');
    }
  };

  return (
    <div className="todo-list">
      <h1>Todo List Manager</h1>
      
      <div className="filter-section">
        <label>Filter by Status:</label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={newTodoTitle}
          onChange={e => setNewTodoTitle(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add</button>
      </form>

      <div className="todos-container">
        {todos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <h3>{todo.title}</h3>
            <p>Status: {todo.completed ? 'Completed' : 'Active'}</p>
            <div className="todo-actions">
              <button onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.completed ? 'Mark Active' : 'Mark Completed'}
              </button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;