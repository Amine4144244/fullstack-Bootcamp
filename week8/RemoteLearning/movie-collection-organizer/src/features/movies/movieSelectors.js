import { createSelector } from '@reduxjs/toolkit';

export const selectMovies = state => state.movies;

export const selectGenres = createSelector(
  [selectMovies],
  (movies) => {
    const genres = new Set(movies.map(movie => movie.genre));
    return ['All Genres', ...genres];
  }
);

export const selectFilteredMovies = createSelector(
  [selectMovies, (state, genre) => genre],
  (movies, genre) => {
    if (genre === 'All Genres' || !genre) return movies;
    return movies.filter(movie => movie.genre === genre);
  }
);