import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { 
    id: 1, 
    name: 'Product Name 1', 
    category: 'Electronics', 
    price: 99.99, 
    inStock: true 
  },
  { 
    id: 2, 
    name: 'Product Name 2', 
    category: 'Clothing', 
    price: 49.99, 
    inStock: false 
  },
  { 
    id: 3, 
    name: 'Product Name 3', 
    category: 'Electronics', 
    price: 199.99, 
    inStock: true 
  },
  { 
    id: 4, 
    name: 'Product Name 4', 
    category: 'Home', 
    price: 29.99, 
    inStock: true 
  }
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: Date.now(),
        ...action.payload
      };
      state.push(newProduct);
    }
  }
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;