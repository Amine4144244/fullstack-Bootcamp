import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products;

export const selectCategories = createSelector(
  [selectProducts],
  (products) => {
    const categories = new Set(products.map(product => product.category));
    return ['All Categories', ...categories];
  }
);

export const selectFilteredProducts = createSelector(
  [selectProducts, (state, filters) => filters],
  (products, filters) => {
    let filtered = [...products];
    
    // Filter by category
    if (filters.category && filters.category !== 'All Categories') {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    
    // Filter by availability
    if (filters.availability) {
      filtered = filtered.filter(product => 
        filters.availability === 'In Stock' ? product.inStock : !product.inStock
      );
    }
    
    // Sort products
    if (filters.sortBy) {
      filtered.sort((a, b) => {
        if (filters.sortBy === 'Name') {
          return a.name.localeCompare(b.name);
        } else if (filters.sortBy === 'Price') {
          return a.price - b.price;
        } else if (filters.sortBy === 'Availability') {
          return (a.inStock === b.inStock) ? 0 : a.inStock ? -1 : 1;
        }
        return 0;
      });
    }
    
    return filtered;
  }
);