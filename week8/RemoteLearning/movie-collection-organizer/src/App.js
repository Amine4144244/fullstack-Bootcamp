import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import MovieList from './components/MovieList';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;