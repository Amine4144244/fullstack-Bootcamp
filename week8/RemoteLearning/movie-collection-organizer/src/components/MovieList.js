import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredMovies, selectGenres } from '../features/movies/movieSelectors';
import { addMovie, updateMovie, deleteMovie } from '../features/movies/moviesSlice';

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [newMovie, setNewMovie] = useState({ title: '', director: '', genre: '' });
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();
  
  const movies = useSelector(state => selectFilteredMovies(state, selectedGenre));
  const genres = useSelector(selectGenres);

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.director && newMovie.genre) {
      dispatch(addMovie(newMovie));
      setNewMovie({ title: '', director: '', genre: '' });
    }
  };

  const handleUpdateMovie = (e) => {
    e.preventDefault();
    if (editingId && newMovie.title && newMovie.director && newMovie.genre) {
      dispatch(updateMovie({ id: editingId, ...newMovie }));
      setEditingId(null);
      setNewMovie({ title: '', director: '', genre: '' });
    }
  };

  return (
    <div className="movie-collection">
      <h1>Movie Collection Organizer</h1>
      
      <div className="filter-section">
        <label>Filter by Genre:</label>
        <select 
          value={selectedGenre} 
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <form 
        onSubmit={editingId ? handleUpdateMovie : handleAddMovie} 
        className="movie-form"
      >
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Director"
          value={newMovie.director}
          onChange={(e) => setNewMovie({...newMovie, director: e.target.value})}
          required
        />
        <select
          value={newMovie.genre}
          onChange={(e) => setNewMovie({...newMovie, genre: e.target.value})}
          required
        >
          <option value="">Select Genre</option>
          {genres.filter(g => g !== 'All Genres').map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <button type="submit">
          {editingId ? 'Update Movie' : 'Add Movie'}
        </button>
        {editingId && (
          <button type="button" onClick={() => {
            setEditingId(null);
            setNewMovie({ title: '', director: '', genre: '' });
          }}>
            Cancel
          </button>
        )}
      </form>

      <div className="movie-list">
        <h2>Movie Collection</h2>
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <div className="movie-actions">
              <button 
                onClick={() => {
                  setEditingId(movie.id);
                  setNewMovie({
                    title: movie.title,
                    director: movie.director,
                    genre: movie.genre
                  });
                }}
              >
                Edit
              </button>
              <button onClick={() => dispatch(deleteMovie(movie.id))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;