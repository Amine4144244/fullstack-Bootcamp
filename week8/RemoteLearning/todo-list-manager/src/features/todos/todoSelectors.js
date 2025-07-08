import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos;

export const selectFilteredTodos = createSelector(
  [selectTodos, (state, filter) => filter],
  (todos, filter) => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
);