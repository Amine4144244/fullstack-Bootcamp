import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Work' },
  { id: 2, name: 'Personal' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    editCategory: (state, action) => {
      const index = state.findIndex(cat => cat.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteCategory: (state, action) => {
      return state.filter(cat => cat.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;

// Selectors
export const selectCategories = state => state.categories;

export const selectCategoryById = createSelector(
  [selectCategories, (_, id) => id],
  (categories, id) => categories.find(cat => cat.id === id)
);

export default categoriesSlice.reducer;
