import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: new Date().toISOString().split('T')[0],
  tasksByDate: {},
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addTask: (state, action) => {
      const { date, text } = action.payload;
      const newTask = {
        id: nanoid(),
        text,
      };
      if (!state.tasksByDate[date]) state.tasksByDate[date] = [];
      state.tasksByDate[date].push(newTask);
    },
    editTask: (state, action) => {
      const { date, id, newText } = action.payload;
      const task = state.tasksByDate[date]?.find(t => t.id === id);
      if (task) task.text = newText;
    },
    deleteTask: (state, action) => {
      const { date, id } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter(t => t.id !== id);
    },
  },
});

export const { setSelectedDate, addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;