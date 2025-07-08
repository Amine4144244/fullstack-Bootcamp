import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { 
    id: 1, 
    title: 'Movie Title 1', 
    director: 'Director Name', 
    genre: 'Action' 
  },
  { 
    id: 2, 
    title: 'Movie Title 2', 
    director: 'Another Director', 
    genre: 'Comedy' 
  }
];

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: Date.now(),
        ...action.payload
      };
      state.push(newMovie);
    },
    updateMovie: (state, action) => {
      const index = state.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteMovie: (state, action) => {
      return state.filter(movie => movie.id !== action.payload);
    }
  }
});

export const { addMovie, updateMovie, deleteMovie } = moviesSlice.actions;
export default moviesSlice.reducer;