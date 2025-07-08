import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './components/ProductList';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;