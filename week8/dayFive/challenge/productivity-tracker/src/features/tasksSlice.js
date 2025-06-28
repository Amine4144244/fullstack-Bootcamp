import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Read Redux docs', completed: false, categoryId: 1 },
  { id: 2, title: 'Write unit tests', completed: true, categoryId: 2 },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTaskComplete: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskComplete } = tasksSlice.actions;

// Selectors
export const selectTasks = state => state.tasks;

export const selectTasksByCategory = createSelector(
  [selectTasks, (_, categoryId) => categoryId],
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
  [selectTasks],
  tasks => tasks.filter(task => task.completed).length
);

export default tasksSlice.reducer;